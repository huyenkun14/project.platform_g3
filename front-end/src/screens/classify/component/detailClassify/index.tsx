import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import st from "./styles";
import { useDispatch } from "react-redux";
import { createClassifyAction } from "../../../../services/classify/actions";
import { createBudgetAction } from "../../../../services/budget/actions";
import DropDownPicker from "react-native-dropdown-picker";
import { BASE_URL } from "../../../../constants/api";
import { deleteCategory, updateCategory } from "../../../../services/classify";
import useTheme from "../../../../hooks/useTheme";

interface Iprops {
  modalVisible?: boolean;
  setModalVisible?: (value?: boolean) => void;
  item?: any;
  listIcon?: { id: number; url: string }[];
  setLoading?: (value?: boolean) => void;
  handleGetlist?: () => void
}

const DetailClassify = (props: Iprops) => {
  const { modalVisible, setModalVisible, item, listIcon, setLoading, handleGetlist } = props;
  const dispatch = useDispatch<any>();
  const [value, setValue] = useState<any>(item?.value);
  const [infoClassify, setInfoClassify] = useState({
    title: item?.title
  });
  const [iconCurrent, setIconCurrent] = useState<number>(item?.iconId);
  const styles = st();
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setInfoClassify({ title: item?.title });
    setValue(item?.value);
    setIconCurrent(item?.iconId);
    setOpen(false);
  }, [item]);
  const [items, setItems] = useState([
    { label: "Thu nhập", value: true },
    { label: "Chi tiêu", value: false },
  ]);

  const onChangeInfoClassify = (name) => {
    return (value: any) => {
      setInfoClassify({ ...infoClassify, [name]: value });
      console.log("infoClassify", infoClassify);
    };
  };

  const handleUpdateCategory = async() => {
    setLoading(true)
    const res = await updateCategory(
        {
            categoryId: item?.categoryId, 
            iconId: iconCurrent,
            title: infoClassify.title,
            value: value,
        }
        )
    setLoading(false)
    if (res?.status === 200) {
        setModalVisible(false)
        handleGetlist?.()
        ToastAndroid.show("Sửa danh mục thành công", ToastAndroid.SHORT)
    }
    else {
        setModalVisible(false)
        ToastAndroid.show("Sửa danh mục không thành công", ToastAndroid.SHORT)
    }
  }

  const handleDeleteCategory = async (id: number) => {
    setLoading(true)
    const res = await deleteCategory(id)
    setLoading(false)
    if (res?.status === 200) {
      setModalVisible(false)
      handleGetlist?.()
      ToastAndroid.show("Xóa danh mục thành công", ToastAndroid.SHORT)
    }
    else {
      setModalVisible(false)
      handleGetlist?.()
      ToastAndroid.show("Xóa danh mục không thành công", ToastAndroid.SHORT)
    }
  } 
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalInner}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
              style={{ position: "absolute", top: 20, right: 20, padding: 10 }}
            >
              <Image
                source={require("../../../../../assets/images/icon/ic_close.png")}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
            <View
              style={[
                styles.headerContainer,
                { alignItems: "center", justifyContent: "center" },
              ]}
            >
              {/* <View style={styles.empty} /> */}
              <Text style={styles.title}>Chi tiết danh mục</Text>
            </View>
            <Text style={styles.inputLabel}>Tên</Text>
            <View style={styles.shadow}>
              <TextInput
                value={infoClassify.title}
                onChangeText={onChangeInfoClassify("title")}
                style={styles.input}
                placeholder="Nhập tên danh mục"
              />
            </View>
            <Text style={styles.inputLabel}>Loại tiền</Text>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              style={{ borderWidth: 1, borderColor: theme.borderColor }}
              customItemContainerStyle={{
                borderWidth: 0,
                backgroundColor: "red",
              }}
            />
            {/* {isIncomeStatus && <View>
                            <Text style={styles.inputLabel}>Ngân sách</Text>
                            <View style={styles.shadow}>
                                <TextInput
                                    value={infoClassify.budget}
                                    onChangeText={onChangeInfoClassify('budget')}
                                    style={styles.input}
                                    placeholder='Nhập ngân sách cho danh mục'
                                />
                            </View>
                        </View>
                        } */}
            <Text style={styles.inputLabel}>Icon</Text>
            <View style={styles.addImage}>
              {/* <Image
                                source={require('../../../../../assets/images/icon/ic_camera.png')}
                                style={styles.addImageIcon}
                            />
                            <Text style={styles.addImageText}>Chọn ảnh</Text> */}
              <ScrollView style={{ width: "100%", height: "100%" }} showsVerticalScrollIndicator={false}>
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                  }}
                >
                  {listIcon &&
                    listIcon.length > 0 &&
                    listIcon.map((it) => {
                      return (
                        <View
                          style={{
                            padding: 10,
                            marginTop: 5,
                            borderColor:
                              it?.id !== iconCurrent
                                ? theme.borderColor
                                : theme.tabActive,
                            borderWidth: 1,
                            borderRadius: 5,
                          }}
                        >
                          <TouchableOpacity onPress={() => setIconCurrent(it?.id)}>
                            <Image
                                source={{ uri: `${BASE_URL}${it?.url}` }}
                                style={{ width: 35, height: 35 }}
                                resizeMode="stretch"
                            />
                          </TouchableOpacity>
                        </View>
                      );
                    })}
                </View>
              </ScrollView>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 40,
              }}
            >
              <TouchableOpacity
                onPress={handleUpdateCategory}
                style={{
                  backgroundColor: theme.tabActive,
                  padding: 12,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    color: theme.WHITE,
                  }}
                >
                  Chỉnh sửa danh mục
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDeleteCategory(item?.categoryId)}
                style={{
                  backgroundColor: theme.CANCEL_BACKGROUNG,
                  padding: 12,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    color: theme.WHITE,
                  }}
                >
                  Xóa danh mục
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DetailClassify;
