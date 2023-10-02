import React, { useState } from 'react';
import { View, Text, Image, Button, TextInput, Modal,StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Header from '../../../../components/header';
import { defaultColors } from '../../../../theme';
import { Calendar } from 'react-native-calendars';
import { styles } from './style';

const IncomeModal = ({visible, onRequestClose, onIncomeSubmit }) => {
  const [incomeTitle, setIncomeTitle] = useState('')
  const [incomePrice, setIncomePrice] = useState('')
  const [incomeTime, setIncomeTime] = useState('')
  const [incomeStatus, setIncomeStatus] = useState('')

  const handleIncomeSubmit = () => {
    
    setIncomeTitle('');
    setIncomePrice('');
    setIncomeTime('');
    setIncomeStatus('')
    onIncomeSubmit()
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
        <Header title='Add Income' isBack={false} />
        <Calendar style={styles.calen}
        current={'2023-10-02'} 
        hideExtraDays={true} 
        
        markedDates={{
          '2023-10-02': { marked: true }, 
        }}
            
                  
          /> 
        <View style={styles.back}>
            
          <Text style={styles.label}>Income Title</Text>
            <TextInput
              placeholder="Side Business"
              value={incomeTitle}
              onChangeText={text => setIncomeTitle(text)}
              style={styles.title}
            />
          <Text style={styles.price}>Amount</Text>
          <View style={styles.input}>
          <Image
                source={require('../../../../../assets/images/icon/dollar.png')} 
                style={styles.moneyIcon}
              />
            <TextInput 
              placeholder="Amount"
              value={incomePrice}
              onChangeText={text => setIncomePrice(text)}
              keyboardType="numeric"
              style={styles.moneyInput}
            />
          </View>
          <Text style={styles.cate}>Income Category</Text>
          <View style={styles.itemPrice}>
             <View style={styles.squareIcon}>
                <Image
                  source={require('../../../../../assets/images/tabs/ic_activity.png')}
                  style={styles.itemIcon}
                 />
              </View>
              <View style={styles.square}>
                 <Text>Salary</Text>
              </View>
              <View style={styles.squaree}>
                 <Text>Rewards</Text>
              </View>     
          
            
            
          </View>
          
          
        




            
           
            <View style={styles.reset}> 
              <View style={styles.item}>
                 <Button title="Add Income" onPress={handleIncomeSubmit} />
              </View>
              
            </View>
              
            
           
            
        </View>
          
            
        </ScrollView>
            
    </Modal>
        
    
  )

}
export default IncomeModal;