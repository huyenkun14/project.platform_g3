import { View, Text, Button, StatusBar, Modal, TextInput, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import Header from '../../components/header'
import Entry from '../../components/entry'
import { defaultColors } from '../../theme'
import AddNewEntry from './component/modal'
import { getAllEntryAction } from '../../services/entry/actions'
import { useDispatch } from 'react-redux'
const Add = () => {
  const [addIncome, setAddIncome] = useState(false)
  const [addExpenses, setAddExpenses] = useState(false)
  const [isIncome, setIsIncome] = useState(false)
  const dispatch = useDispatch<any>()
  const [listEntry, setListEntry] = useState([])

  useEffect(() => {
    getListEntry()
  }, [addIncome, addExpenses])
  const getListEntry = () => {
    dispatch(getAllEntryAction())
      .then(res => {
        const converListEntry = res?.payload.slice(-3)
        setListEntry(converListEntry)
      })
      .catch(err => console.log('err', err))
  }
  const toAddIncome = () => {
    setAddIncome(true);
    setIsIncome(true)
  };

  const toAddExpense = () => {
    setAddExpenses(true);
    setIsIncome(false)
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
          {listEntry.length >= 1 ?
            listEntry.map((item, index) =>
            (<Entry
              entryId={item.transactionId}
              key={index}
              title={item.category.title}
              time={item.date}
              price={item.amount}
              note={item.description}
              status={item.category.value} 
              imageUrl={item.category.urlIcon}
              />))
            :
            <Text style={{ textAlign: 'center' }}>Không có giao dịch gần đây</Text>
          }
        </View>

        {/* Expense Modal */}
        <AddNewEntry
          isIncome={isIncome}
          title='Thêm chi tiêu'
          modalVisible={addExpenses}
          setModalVisible={setAddExpenses}
        />
        <AddNewEntry
          isIncome={isIncome}
          title='Thêm thu nhập'
          modalVisible={addIncome}
          setModalVisible={setAddIncome}
        />
      </ScrollView>
    </SafeAreaView>
  )

}

export default Add