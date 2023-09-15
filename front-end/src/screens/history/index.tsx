import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Header from '../../components/header'
import Entry from '../../components/entry'
import { history } from '../../mock/history'
import { Agenda } from 'react-native-calendars'

const History = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title='History' />
      <Agenda
        selected="2022-12-01"
        items={{
          '2022-12-01': [{
            id: 1,
            type: 'Đồ ăn',
            time: '02-09-2023',
            money: 30000,
            note: 'Ăn sáng',
            status: 'chi tiêu'
          },
          {
            id: 2,
            type: 'Tiền Thưởng',
            time: '02-09-2023',
            money: 1000000,
            note: 'Tiền thưởng lễ 2/9',
            status: 'thu nhập'
          },],
          '2022-12-02': [{
            id: 3,
            type: 'Tiền nhà',
            time: '01-09-2023',
            money: 2000000,
            note: 'Tiền nhà tháng 8',
            status: 'chi tiêu'
          },]
        }}
        renderItem={(item: any) => {
          if (item) {
            console.log(item)
            return <Entry title={item.type} price={item.money} time={item.time} note={item.note} status={item.status} />
          }
          else {
            return <Text>Không có hoạt động nào.</Text>
          }
        }}
      />
    </SafeAreaView>
  )
}

export default History