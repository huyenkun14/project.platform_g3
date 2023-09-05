import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Header from '../../components/header'
import Entry from '../../components/entry'

const History = () => {
  return (
    <View style={styles.container}>
      <Header title='History' />
      <ScrollView>
        <Entry title='Food' time='02-09-2023' price='-200.000' note='Ăn sáng' />
        <Entry title='Bonus' time='01-09-2023' price='+500.000' note='Thưởng lễ 2/9' />
        <Entry title='Traffic' time='31-08-2023' price='-7.000' note='Buýt' />
        <Entry title='Food' time='02-09-2023' price='-200.000' note='Ăn sáng' />
        <Entry title='Bonus' time='01-09-2023' price='+500.000' note='Thưởng lễ 2/9' />
        <Entry title='Traffic' time='31-08-2023' price='-7.000' note='Buýt' />
        <Entry title='Food' time='02-09-2023' price='-200.000' note='Ăn sáng' />
        <Entry title='Bonus' time='01-09-2023' price='+500.000' note='Thưởng lễ 2/9' />
        <Entry title='Traffic' time='31-08-2023' price='-7.000' note='Buýt' />
      </ScrollView>
    </View>
  )
}

export default History