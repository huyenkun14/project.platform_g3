import React, { useState } from 'react';
import { View, Text, Image, Button, TextInput, Modal,StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { styles } from './styles';
import Header from '../../../../components/header';
import { defaultColors } from '../../../../theme';
import { Calendar } from 'react-native-calendars';

const ExpensesModal = ({visible, onRequestClose, onExpensesSubmit }) => {
  const [expensesTitle, setExpensesTitle] = useState('')
  const [expensesPrice, setExpensesPrice] = useState('')
  const [expensesTime, setExpensesTime] = useState('')
  const [expensesStatus, setExpensesStatus] = useState('')

  const handleExpenseSubmit = () => {
    
    setExpensesTitle('');
    setExpensesPrice('');
    setExpensesTime('');
    setExpensesStatus('')
    onExpensesSubmit()
  };

  return (

      <Modal 
           animationType="slide"
           transparent={false}
           visible={visible}
           onRequestClose={onRequestClose}    
    >
        <ScrollView style={styles.container}>
        {/* background */}
        <Image
          source={require('../../../../../assets/images/background1.png')}
          style={styles.imageBack}
        />
        {/* header */}
        <Header title='Add Expense' isBack={false} />
        <Calendar style={styles.calen}
        current={'2023-10-02'} 
        hideExtraDays={true} 
        
        markedDates={{
          '2023-10-02': { marked: true }, 
        }}
            
                  
          /> 
        <View style={styles.back}>
            
          <Text style={styles.label}>Expense Title</Text>
            <TextInput
              placeholder="Family Expense"
              value={expensesTitle}
              onChangeText={text => setExpensesTitle(text)}
              style={styles.title}
            />
          <Text style={styles.price}>Amount</Text>
          <View style={styles.input}>
          <Image
                source={require('../../../../../assets/images/icon/dollar.png')} // Thay đổi đường dẫn đến tệp ảnh của bạn
                style={styles.moneyIcon}
              />
            <TextInput 
              placeholder="Amount"
              value={expensesPrice}
              onChangeText={text => setExpensesPrice(text)}
              keyboardType="numeric"
              style={styles.moneyInput}
            />
          </View>
          <Text style={styles.cate}>Expense Category</Text>
          <View style={styles.itemPrice}>
             <View style={styles.squareIcon}>
                <Image
                  source={require('../../../../../assets/images/tabs/ic_activity.png')}
                  style={styles.itemIcon}
                 />
              </View>
              <View style={styles.square}>
                 <Text>Health</Text>
              </View>
              <View style={styles.squaree}>
                 <Text>Grocery</Text>
              </View>     
          </View>
          <Text style={styles.resit}>Expense Resit Photo </Text>
          <View style={styles.photo}>
          <View style={styles.itemcamera}>
                <Image
                 source={require('../../../../../assets/images/icon/camera.png')}
            style={styles.camera}
            />
            <Text style={styles.textcamera}>Add Photo</Text>
              </View>
            
            
          </View>
          
          
        




            
           
            <View style={styles.reset}> 
              <View style={styles.item}>
                 <Button title="Add Expense" onPress={handleExpenseSubmit} />
              </View>
              
            </View>
              
            
           
            
        </View>
          
            
        </ScrollView>
            
    </Modal>
        
    
  )

}
export default ExpensesModal;