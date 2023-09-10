import { ScrollView, View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Header from '../../components/header'
import { overview } from '../../mock/home'
import Banner from './components/banner'
import Entry from '../../components/entry'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
  const renderOverviewList = ({ item }) => (
    <View style={styles.overviewItem}>
      <View>
        <Image
          source={require('../../../assets/images/icon/ic_card.png')}
          style={styles.cardIcon}
        />
        <Text style={styles.overviewItemTitle}>{item.title}</Text>
      </View>
      <View>
        <Text style={styles.overviewItemUnit}>{item.unit}</Text>
        <Text style={styles.overviewItemMoney}>{Number(item.money).toLocaleString('en')}</Text>
      </View>
    </View>
  )
  return (
    <View>
      <StatusBar style='auto' />
      <ScrollView style={styles.container}>
        {/* background */}
        <Image
          source={require('../../../assets/images/background1.png')}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            tintColor: '#EFF8FB'
          }}
        />
        {/* header */}
        <Header title='Trang chủ' isBack={false} />
        {/* banner */}
        <Banner />
        {/* overview */}
        <View style={styles.overviewContainer}>
          <Text style={styles.title}>Tổng quan</Text>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={overview}
            renderItem={renderOverviewList}
            contentContainerStyle={{ paddingLeft: 25, paddingRight: 10 }}
          />
        </View>
        {/* last entries */}
        <View>
          <Text style={styles.title}>Gần đây</Text>
          <Entry title='Food' time='02-09-2023' price={-200000} note='Ăn sáng' />
          <Entry title='Bonus' time='01-09-2023' price={+500000} note='Thưởng lễ 2/9' />
          <Entry title='Traffic' time='31-08-2023' price={-7000} note='Buýt' />
        </View>
      </ScrollView>
    </View>
  )
}

export default Home