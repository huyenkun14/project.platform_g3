import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, Button, TextInput, Modal, StyleSheet, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform, ToastAndroid } from 'react-native';
import { styles } from './styles';
import DatePicker from '@react-native-community/datetimepicker';
import Header from '../../../../components/header';
import DropDownPicker from 'react-native-dropdown-picker';
import AddNewClassify from '../../../../components/addNewClassify';
import { useDispatch } from 'react-redux';
import { getAllClassifyAction } from '../../../../services/classify/actions';
import { getItemObjectAsyncStorage } from '../../../../../utils/asyncStorage';
import { KEY_STORAGE } from '../../../../constants/storage';
import { createEntryAction } from '../../../../services/entry/actions';

const AddNewEntry = ({ isIncomeStatus, title, modalVisible, setModalVisible, onSubmit }) => {
  const [addNewClassifyOpen, setAddNewClassifyOpen] = useState(false)
  const [date, setDate] = useState<Date>(new Date());
  const [infoEntry, setInfoEntry] = useState({
    time: String(date.toLocaleDateString()),
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
  useEffect(() => {
    getListClassify()
  }, [])
  const getListClassify = () => {
    dispatch(getAllClassifyAction())
      .then(res => {
        setInfoEntry({
          time: String(date.toLocaleDateString()),
          title: '',
          note: '',
          money: '',
        })
        const converListClassify = res?.payload.map((item) => ({ label: item.title, value: item.id }))
        setListClassify(converListClassify)
      })
      .catch(err => console.log('err', err))
  }
  const handleCreateEntry = () => {
    dispatch(createEntryAction({
      categoryId: classifyValue,
      amount: infoEntry.money,
      date: infoEntry.time,
      description: infoEntry.note
    }))
      .then(res => {
        console.log(res)
        ToastAndroid.show('Thêm giao dịch thành công',ToastAndroid.SHORT)
        setModalVisible(false)
      })
      .catch(err => console.log('err', err))
  }
  const onListClassifyOpen = useCallback(() => {
    setListOpen(false);
  }, []);
  const onChangeInfoEntry = (name) => {
    return (value: any) => {
      setInfoEntry({ ...infoEntry, [name]: value })
      console.log('infoEntry', infoEntry)
    }
  }
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
    setInfoEntry({ ...infoEntry, time: String(currentDate.toLocaleDateString()) })
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <Image
            style={styles.bg}
            source={require('../../../../../assets/images/bg_modal.png')}
          />
          <Image
            style={styles.logo}
            source={require('../../../../../assets/images/logo_add.png')}
          />
          <Text style={styles.header}>Moli</Text>
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
                value={infoEntry.money}
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
            <TouchableOpacity onPress={handleCreateEntry}>
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
      </Modal>
      <AddNewClassify isIncomeStatus={isIncomeStatus} modalVisible={addNewClassifyOpen} setModalVisible={setAddNewClassifyOpen} onSubmit={undefined} />
    </View>
  )

}
export default AddNewEntry;