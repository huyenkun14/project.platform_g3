import { View, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Header from '../../components/header'
import Entry from '../../components/entry'
import { history } from '../../mock/history'

const History = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title='History' />
      <FlatList
        data={history}
        renderItem={({item}) => (
          <Entry title={item.type} price={item.money} time={item.time} note={item.note} status={item.status} />
        ) }
      />
    </SafeAreaView>
  )
}

export default History