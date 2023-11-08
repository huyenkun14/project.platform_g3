import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, Button, TextInput, Modal, StyleSheet, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform, ToastAndroid, KeyboardAvoidingView, Alert } from 'react-native';
import { styles } from './styles';
import DatePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import AddNewClassify from '../../../../components/addNewClassify';
import { useDispatch } from 'react-redux';
import { getAllClassifyAction } from '../../../../services/classify/actions';
import { createEntryAction } from '../../../../services/entry/actions';
import moment from 'moment';
import { checkWarningAction } from '../../../../services/notification/actions';
import { addCommas, removeNonNumeric } from '../../../../../utils/formatMoney';
import * as ImagePicker from 'expo-image-picker';

const AddNewEntry = ({ isIncome, title, modalVisible, setModalVisible }) => {
  const [addNewClassifyOpen, setAddNewClassifyOpen] = useState(false)
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
  const [listOpen, setListOpen] = useState(false);
  const [newEntry, setNewEntry] = useState<any>([]);
  const [warning, setWarning] = useState<any>({});
  useEffect(() => {
    getListClassify()
  }, [listClassifyOpen])
  const getListClassify = () => {
    dispatch(getAllClassifyAction())
      .then(res => {
        const convertListClassify = res?.payload?.filter(item => item?.value === isIncome).map((item, index) => ({ label: item.title, value: item.categoryId }))
        setListClassify(convertListClassify)
      })
      .catch(err => console.log('err', err))
  }
  const handleCreateEntry = () => {
    const imageToUpload = image
    const imageName = imageToUpload?.split('/').pop()
    const imageType = imageToUpload?.split('.').pop()
    const data = new FormData()
    data.append('categoryId', classifyValue)
    data.append('amount', infoEntry.money.replace('.', ''))
    data.append('date', infoEntry.time)
    data.append('description', infoEntry.note)
    // data.append('image', {
    //   uri: imageToUpload,
    //   type: `image/${imageType}`,
    //   name: imageName
    // });
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
          ToastAndroid.show('Thêm giao dịch thành công', ToastAndroid.SHORT)
          setModalVisible(false)
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
      // aspect: [5, 5],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(result)
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <KeyboardAvoidingView behavior={"padding"}>
        <ScrollView>
          <View style={styles.modalContainer}>
            <Image
              style={styles.bg}
              source={require('../../../../../assets/images/bg_modal.png')}
            />
            <Image
              style={styles.logo}
              source={require('../../../../../assets/images/Moly.png')}
            />
            <Text style={styles.title}>{title}</Text>
            <View style={[styles.shadow, styles.timeContainer]}>
              <TouchableOpacity
                style={styles.timeIconView}
                onPress={() => { setShowDatePicker(true) }}
              >
                <Image
                  style={styles.timeIcon}
                  source={require('../../../../../assets/images/icon/ic_calendar.png')}
                />
              </TouchableOpacity>
              <Text style={styles.timeText}>{infoEntry.time}</Text>
            </View>
            <TouchableOpacity
              style={{ position: 'absolute', top: 30, right: 25, }}
              onPress={() => { setModalVisible(false) }}
            >
              <Image
                source={require('../../../../../assets/images/icon/ic_close.png')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
            <View>
              <View style={[styles.shadow, styles.dropdownContainer]}>
                <View style={styles.dropdownView}>
                  <DropDownPicker
                    style={[styles.dropdown]}
                    open={listClassifyOpen}
                    value={classifyValue}
                    items={listClassify}
                    setOpen={setListClassifyOpen}
                    setValue={setClassifyValue}
                    setItems={setListClassify}
                    itemKey="label"
                    placeholder="Chọn danh mục"
                    onOpen={onListClassifyOpen}
                    onChangeValue={onChangeInfoEntry('title')}
                    dropDownDirection="DEFAULT"
                    searchable
                    listMode='MODAL'
                    zIndex={2000}
                  />
                </View>
                <TouchableOpacity style={styles.newClassify} onPress={() => { setAddNewClassifyOpen(true) }}>
                  <Image
                    source={require('../../../../../assets/images/icon/ic_plus.png')}
                    style={styles.newClassifyIcon}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.inputLabelContainer}>
                <Image
                  style={styles.inputLabelIcon}
                  source={require('../../../../../assets/images/icon/ic_money.png')}
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
                  source={require('../../../../../assets/images/icon/ic_edit.png')}
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
              <TouchableOpacity onPress={pickImage}>
                <Image
                  source={require('../../../../../assets/images/icon/ic_camera.png')}
                  style={{ height: 30, width: 30, resizeMode: 'contain', alignSelf: 'center' }}
                />
              </TouchableOpacity>
              <View style={styles.imageContainer}>
                {image ?
                  <Image
                    style={styles.image}
                    source={{ uri: image }}
                  />
                  :
                  ''
                }
              </View>
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
          </View>
        </ScrollView>
        <AddNewClassify
          modalVisible={addNewClassifyOpen}
          setModalVisible={setAddNewClassifyOpen}
        />
      </KeyboardAvoidingView>
    </Modal>
  )
}
export default AddNewEntry;