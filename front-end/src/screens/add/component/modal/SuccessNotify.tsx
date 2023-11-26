import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, Button, TextInput, Modal, StyleSheet, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform, ToastAndroid, KeyboardAvoidingView, Alert } from 'react-native';
import st from './styles';
import Entry from '../../../../components/entry';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_TITLE } from '../../../../constants/navigation';

const AddNewEntry = ({ modalVisible, setModalVisible, title, date, amount, urlIcon, description }) => {
  const navigation = useNavigation<any>()
  const styles = st();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <TouchableWithoutFeedback onPress={() => { setModalVisible(false) }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalInner}>
            <Image source={require('../../../../../assets/splash.png')} style={styles.logo} />
            <Text style={styles.title}>Thêm giao dịch thành công</Text>
            <Entry
              title={title}
              time={date}
              price={amount}
              note={description}
              imageUrl={urlIcon}
            />
            <TouchableOpacity style={styles.button} onPress={() => {
              setModalVisible(false)
              navigation.navigate(NAVIGATION_TITLE.HISTORY)
            }}>
              <Text style={styles.buttonText}>Xem lịch sử giao dịch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { setModalVisible(false) }}>
              <Text style={styles.buttonText}>Thêm giao dịch khác</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
export default AddNewEntry;