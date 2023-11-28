import { View, Text, Button, StatusBar, Modal, TextInput, Image, ScrollView, SafeAreaView, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import st from './styles'
import DatePicker from '@react-native-community/datetimepicker';
import Header from '../../components/header'
import Entry from '../../components/entry'
import SuccessNotify from './component/modal/SuccessNotify'
import { getAllEntryAction } from '../../services/entry/actions'
import { useDispatch } from 'react-redux'
import useTheme from '../../hooks/useTheme'
import { createEntryAction } from '../../services/entry/actions';
import moment from 'moment';
import { checkWarningAction } from '../../services/notification/actions';
import { addCommas, removeNonNumeric } from '../../../utils/formatMoney';
import * as ImagePicker from 'expo-image-picker';
import { getAllClassifyAction } from '../../services/classify/actions'
import DropDownPicker from 'react-native-dropdown-picker'
import Toast from '../../../utils/toast';
import AddNewClassify from '../../components/addNewClassify';
import { getAllIcon } from '../../services/icon';
import ListCategoryModal from '../../components/listCategoryModal';
const Add = () => {
  const styles = st();
  const [addNewClassifyOpen, setAddNewClassifyOpen] = useState(false)
  const [isSuccess, showSuccess] = useState(false)
  const [isListCategory, showListCategory] = useState(false)
  const [category, setCategory] = useState<any>()
  const [date, setDate] = useState<Date>(new Date());
  const [image, setImage] = useState(null);
  const [infoEntry, setInfoEntry] = useState({
    time: moment(date).format("DD-MM-YYYY"),
    title: '',
    note: '',
    money: '',
  })
  const dispatch = useDispatch<any>()
  const [listClassify, setListClassify] = useState([]);
  const [listClassifyOpen, setListClassifyOpen] = useState(false);
  const [classifyValue, setClassifyValue] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [listIcon, setListIcon] = useState<{ id: number, url: string }[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [listOpen, setListOpen] = useState(false);
  const [newEntry, setNewEntry] = useState<any>([]);
  const [warning, setWarning] = useState<any>({});
  useEffect(() => {
    getListClassify()
  }, [listClassifyOpen])
  const handleGetIcon = async () => {
    setLoading(true)
    const res = await getAllIcon()
    setLoading(false)
    console.log("res nè", res)
    if (res?.status === 200) {
      setListIcon(res?.data)
    }
  }
  const getListClassify = () => {
    dispatch(getAllClassifyAction())
      .then(res => {
        const convertListClassify = res?.payload?.filter(item => item?.value === true).map((item, index) => ({ label: item.title, value: item.categoryId }))
        setListClassify(convertListClassify)
      })
      .catch(err => console.log('err', err))
  }
  const handleCreateEntry = () => {
    const imageToUpload = image
    const imageName = imageToUpload?.split('/').pop()
    const imageType = imageToUpload?.split('.').pop()
    const data = new FormData()
    data.append('categoryId', category?.categoryId)
    data.append('amount', infoEntry.money.replace('.', ''))
    data.append('date', infoEntry.time)
    data.append('description', infoEntry.note)
    data.append('image', {
      uri: imageToUpload,
      type: `image/${imageType}`,
      name: imageName
    });
    dispatch(createEntryAction(data))
      .then(res => {
        if (res?.payload) {
          setNewEntry(res?.payload)
          setInfoEntry({
            time: moment(date).format("DD-MM-YYYY"),
            title: '',
            note: '',
            money: '',
          })
          setCategory('')
          setImage(null)
          showSuccess(true)
        } else {
          ToastAndroid.show('Có lỗi!', ToastAndroid.SHORT)
        }
      })
      .catch(err => console.log('err', err))
  }
  // const checkWarning = () => {
  //   dispatch(checkWarningAction({
  //     transactionId: newEntry?.transactionId
  //   }))
  //     .then(res => {
  //       console.log(res, 'warninggggggg')
  //       setWarning(res?.payload)
  //     })
  //     .catch(err => console.log(err))
  // }
  const onListClassifyOpen = useCallback(() => {
    setListOpen(false);
  }, []);
  const onChangeInfoEntry = (name) => {
    return (value: any) => {
      setInfoEntry({ ...infoEntry, [name]: value })
    }
  }
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
    setInfoEntry({ ...infoEntry, time: moment(currentDate).format("DD-MM-YYYY") })
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 6],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView style={styles.modalContainer} contentContainerStyle={{ paddingBottom: 100 }}>
        <Header title='Thêm giao dịch' isBack={false} />
        {/* <Image
          style={styles.bg}
          source={require('../../../assets/images/bg_modal.png')}
        /> */}
        <View style={[styles.shadow, styles.timeContainer]}>
          <TouchableOpacity
            style={styles.timeIconView}
            onPress={() => { setShowDatePicker(true) }}
          >
            <Image
              style={styles.timeIcon}
              source={require('../../../assets/images/icon/ic_calendar.png')}
            />
          </TouchableOpacity>
          <Text style={styles.timeText}>{infoEntry.time}</Text>
        </View>
        <View>
          <View style={[styles.shadow, styles.dropdownContainer]}>
            <TouchableOpacity
              style={styles.dropdownView}
              onPress={() => {
                showListCategory(true)
                console.log(category, 'categoryyyyyyyyyyyyyy')
              }}
            >
              <Text>{category?.title||'Chọn danh mục'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.newClassify} onPress={() => {
              setAddNewClassifyOpen(true)
              handleGetIcon()
            }}>
              <Image
                source={require('../../../assets/images/icon/ic_plus.png')}
                style={styles.newClassifyIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputLabelContainer}>
            <Image
              style={styles.inputLabelIcon}
              source={require('../../../assets/images/icon/ic_money.png')}
            />
            <Text style={styles.inputLabel}>Số tiền</Text>
          </View>
          <View style={styles.shadow}>
            <TextInput
              value={addCommas(removeNonNumeric(infoEntry.money))}
              onChangeText={onChangeInfoEntry('money')}
              keyboardType="numeric"
              style={styles.input}
              placeholder='Nhập số tiền'
            />
            <Text style={styles.moneyText}>VNĐ</Text>
          </View>
          <View style={styles.inputLabelContainer}>
            <Image
              style={styles.inputLabelIcon}
              source={require('../../../assets/images/icon/ic_edit.png')}
            />
            <Text style={styles.inputLabel}>Ghi chú</Text>
          </View>
          <View style={styles.shadow}>
            <TextInput
              value={infoEntry.note}
              onChangeText={onChangeInfoEntry('note')}
              multiline
              style={[styles.input, styles.inputNote]}
              placeholder='Nhập ghi chú...'
            />
          </View>
          {!image &&
            <TouchableOpacity
              onPress={pickImage}
              style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10, height: 50, borderWidth: 1, borderStyle: 'dashed', borderColor: 'grey', marginHorizontal: 25, borderRadius: 10 }}
            >
              <Image
                source={require('../../../assets/images/icon/ic_camera.png')}
                style={{ height: 22, width: 22, resizeMode: 'contain', marginRight: 10 }}
              />
              <Text>Chọn ảnh</Text>
            </TouchableOpacity>
          }
          {image &&
            <View style={[styles.imageContainer, styles.input, { height: 300 }]}>
              <Image
                style={styles.image}
                source={{ uri: image }}
              />
              <TouchableOpacity
                onPress={() => { setImage(null) }}
                style={{ position: 'absolute', top: 20, right: 20, padding: 10, borderRadius: 100, backgroundColor: '#CCCCCC' }}
              >
                <Image
                  source={require('../../../assets/images/icon/ic_delete.png')}
                  style={{ height: 15, width: 15, resizeMode: 'contain' }}
                />
              </TouchableOpacity>
            </View>
          }

          <TouchableOpacity onPress={() => {
            handleCreateEntry()
            // checkWarning()
            // if (warning?.message) {
            //   Alert.alert(`${warning?.message}`)
            // }
          }}>
            <Text style={[styles.button, styles.buttonAdd]}>Thêm</Text>
          </TouchableOpacity>
        </View>
        {showDatePicker &&
          <DatePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        }
        {addNewClassifyOpen &&
          <AddNewClassify
            modalVisible={addNewClassifyOpen}
            setModalVisible={setAddNewClassifyOpen}
            listIcon={listIcon}
            setLoading={setLoading}
            handleGetlist={getListClassify}
          />
        }
        {
          isListCategory &&
          <ListCategoryModal
            modalVisible={isListCategory}
            setModalVisible={showListCategory}
            setEntryClassify={setCategory}
          />
        }
      </ScrollView>
      <SuccessNotify
        modalVisible={isSuccess}
        setModalVisible={showSuccess}
        title={infoEntry?.title}
        date={infoEntry?.time}
        amount={infoEntry?.money}
        urlIcon={category?.urlIcon}
        description={infoEntry?.note}
      />
    </SafeAreaView>
  )

}

export default Add