import { View, Text, StatusBar, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Header from '../../components/header'
import Entry from '../../components/entry'
import { defaultColors } from '../../theme'

const Add = () => {

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
          <TouchableOpacity>
            <View style={[styles.addItem, styles.addIncome]}>
              <Image
                source={require('../../../assets/images/icon/add.png')}
                style={[styles.itemIcon, {tintColor: defaultColors.text_gray}]}
              />
              <Text style={styles.addIncomeText}>Thêm thu nhập</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={[styles.addItem, styles.addExpense]}>
              <Image
                source={require('../../../assets/images/icon/add.png')}
                style={[styles.itemIcon, {tintColor: defaultColors.text_white}]}
              />
              <Text style={styles.addExpenseText}>Thêm chi tiêu</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* last entries */}
        <View>
          <Text style={styles.title}>Gần đây</Text>
          <Entry title='Food' time='02-09-2023' price={200000} note='Ăn sáng' status='chi tiêu' />
          <Entry title='Bonus' time='01-09-2023' price={500000} note='Thưởng lễ 2/9' status='thu nhập' />
          <Entry title='Traffic' time='31-08-2023' price={7000} note='Buýt' status='chi tiêu' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Add