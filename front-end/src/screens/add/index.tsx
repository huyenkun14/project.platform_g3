import { View, Text, Button, StatusBar, Modal, TextInput, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Header from '../../components/header'
import Entry from '../../components/entry'
import { defaultColors } from '../../theme'
import AddNewEntry from './component/modal'
const Add = () => {
  const [addIncome, setAddIncome] = useState(false)
  const [addExpenses, setAddExpenses] = useState(false)


  const toAddIncome = () => {
    setAddIncome(true);
  };

  const toAddExpense = () => {
    setAddExpenses(true);
  };


  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView style={styles.container}>
        {/* background */}
        <Image
          source={require('../../../assets/images/background0.png')}
          style={styles.imageBack}
        />
        {/* header */}
        <Header title='Thêm' isBack={false} />
        {/* add item */}
        <View style={styles.addContainer}>
          <TouchableOpacity onPress={toAddIncome}>
            <View style={[styles.addItem, styles.addIncome]}>
              <Image
                source={require('../../../assets/images/icon/add.png')}
                style={[styles.itemIcon, { tintColor: defaultColors.text_3 }]}
              />

              <Text style={styles.addIncomeText}>Thêm thu nhập</Text>

            </View>
          </TouchableOpacity>
          <View style={styles.addContainer}>
            <TouchableOpacity onPress={toAddExpense}>
              <View style={[styles.addItem, styles.addExpense]}>
                <Image
                  source={require('../../../assets/images/icon/add.png')}
                  style={[styles.itemIcon, { tintColor: defaultColors.text_2 }]}
                />
                <Text style={styles.addExpenseText}>Thêm chi tiêu</Text>

              </View>
            </TouchableOpacity>
          </View>

        </View>
        {/* last entries */}
        <View>
          <Text style={styles.title}>Gần đây</Text>
          <Entry title='Food' time='02-09-2023' price={200000} note='Ăn sáng' status='chi tiêu' />
          <Entry title='Bonus' time='01-09-2023' price={500000} note='Thưởng lễ 2/9' status='thu nhập' />
          <Entry title='Traffic' time='31-08-2023' price={7000} note='Buýt' status='chi tiêu' />
        </View>

        {/* Expense Modal */}
        <AddNewEntry
          title='Thêm chi tiêu'
          modalVisible={addExpenses}
          setModalVisible={setAddExpenses}
          onSubmit={() => {

          }}
        />
        <AddNewEntry
          title='Thêm thu nhập'
          modalVisible={addIncome}
          setModalVisible={setAddIncome}
          onSubmit={() => {

          }}
        />


      </ScrollView>
    </SafeAreaView>
  )

}

export default Add