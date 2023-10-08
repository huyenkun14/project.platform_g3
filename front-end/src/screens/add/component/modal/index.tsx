import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, Button, TextInput, Modal, StyleSheet, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
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
  const [listClassifyValue, setListClassifyValue] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  useEffect(() => {
    getListClassify()
  }, [])
  const getListClassify = () => {
    dispatch(getAllClassifyAction())
      .then(res => {
        console.log(res)
        const converListClassify = res?.payload.map((item) => ({ id: item.id, label: item.title, value: item.title }))
        setListClassify(converListClassify)
      })
      .catch(err => console.log('err', err))
  }
  const handleCreateEntry = () => {
    dispatch(createEntryAction(infoEntry))
      .then(res => {
        console.log(res)
        const converListClassify = res?.payload.map((item) => ({ id: item.id, label: item.title, value: item.title }))
        setListClassify(converListClassify)
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
            source={require('../../../../../assets/images/background-auth.png')}
          />
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity
            style={{ position: 'absolute', top: 40, right: 40, }}
            onPress={() => { setModalVisible(false) }}
          >
            <Image
              source={require('../../../../../assets/images/icon/ic_close.png')}
              style={styles.closeIcon}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.inputLabel}>Danh mục</Text>
            <View style={styles.dropdownContainer}>
              <View style={[styles.shadow]}>
                <DropDownPicker
                  style={[styles.dropdown]}
                  open={listClassifyOpen}
                  value={listClassifyValue}
                  items={listClassify}
                  setOpen={setListClassifyOpen}
                  setValue={setListClassifyValue}
                  setItems={setListClassify}
                  placeholder="Chon danh muc"
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
            <Text style={styles.inputLabel}>Thời gian</Text>
            <View style={styles.shadow}>
              <TouchableOpacity onPress={() => { setShowDatePicker(true) }}>
                <TextInput
                  value={infoEntry.time}
                  onChangeText={onChangeInfoEntry('time')}
                  style={styles.input}
                  editable={false}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.inputLabel}>Số tiền</Text>
            <View style={styles.shadow}>
              <TextInput
                value={infoEntry.money}
                onChangeText={onChangeInfoEntry('money')}
                keyboardType="numeric"
                style={styles.input}
              />
            </View>
            <Text style={styles.inputLabel}>Ghi chú</Text>
            <View style={styles.shadow}>
              <TextInput
                value={infoEntry.note}
                onChangeText={onChangeInfoEntry('note')}
                multiline
                style={[styles.input, styles.inputNote]}
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