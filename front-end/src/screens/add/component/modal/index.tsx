import React, { useCallback, useState } from 'react';
import { View, Text, Image, Button, TextInput, Modal, StyleSheet, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { styles } from './styles';
import DatePicker from '@react-native-community/datetimepicker';
import Header from '../../../../components/header';
import DropDownPicker from 'react-native-dropdown-picker';
import AddNewClassify from '../../../../components/addNewClassify';

const AddNewEntry = ({ title, modalVisible, setModalVisible, onSubmit }) => {
  const [addNewClassifyOpen, setAddNewClassifyOpen] = useState(false)
  const [date, setDate] = useState<Date>(new Date());
  const [infoEntry, setInfoEntry] = useState({
    time: String(date.toLocaleDateString()),
    title: '',
    note: '',
    money: '',
  })
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [gender, setGender] = useState([
    { label: "Male1", value: "male1" },
    { label: "Female1", value: "female1" },
    { label: "Prefer Not to Say1", value: "neutral1" },
    { label: "Male2", value: "male2" },
    { label: "Female2", value: "female2" },
    { label: "Prefer Not to Say2", value: "neutral2" },
    { label: "Male3", value: "male3" },
    { label: "Female3", value: "female3" },
    { label: "Prefer Not to Say3", value: "neutral3" },
    { label: "Male4", value: "male4" },
    { label: "Female4", value: "female4" },
    { label: "Prefer Not to Say4", value: "neutral4" },
  ]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
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
  };
  const handleExpenseSubmit = () => {

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
                  open={genderOpen}
                  value={genderValue}
                  items={gender}
                  setOpen={setGenderOpen}
                  setValue={setGenderValue}
                  setItems={setGender}
                  placeholder="Chon danh muc"
                  onOpen={onGenderOpen}
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
                  value={String(date.toLocaleDateString())}
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
            <TouchableOpacity onPress={handleExpenseSubmit}>
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
      <AddNewClassify modalVisible={addNewClassifyOpen} setModalVisible={setAddNewClassifyOpen} onSubmit={undefined} />
    </View>
  )

}
export default AddNewEntry;