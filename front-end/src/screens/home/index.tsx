import { ScrollView, View, Text, FlatList, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Header from '../../components/header'
import { overview } from '../../mock/home'
import Banner from './components/banner'
import Entry from '../../components/entry'
import { StatusBar } from 'expo-status-bar'
import Option from './components/option'

const Home = () => {
  const optionsData = [
    {
      id: 1,
      title: 'Quản lý',
      icon: require('../../../assets/images/icon/ic_manager.png')
    },
    {
      id: 2,
      title: 'Tiết kiệm',
      icon: require('../../../assets/images/icon/ic_saving.png')
    },
    {
      id: 3,
      title: 'Ngân sách',
      icon: require('../../../assets/images/icon/ic_coins.png')
    },
    {
      id: 4,
      title: 'Lịch sử',
      icon: require('../../../assets/images/icon/ic_history.png')
    },
    {
      id: 5,
      title: 'Cài đặt',
      icon: require('../../../assets/images/icon/ic_setting.png')
    },
    {
      id: 6,
      title: 'Tài khoản',
      icon: require('../../../assets/images/icon/ic_account.png')
    }
  ]
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
    <SafeAreaView>
      <StatusBar style="auto" />
      <ScrollView style={styles.container}>
        {/* background */}
        <Image
          source={require('../../../assets/images/background1.png')}
          style={styles.imageBack}
        />
        {/* header */}
        <Header title='Trang chủ' isBack={false} />

        {/* overview */}
        <View style={styles.overviewContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={overview}
            renderItem={renderOverviewList}
            contentContainerStyle={{ paddingLeft: 25, paddingRight: 10 }}
          />
        </View>
        {/* feature */}
        <View style={styles.overviewContainer}>
          <Text style={styles.title}>Danh mục</Text>
          <View style={styles.optionContainer}>
            {optionsData.map((item) => (
              <Option title={item.title} icon={item.icon} key={item.id}/>
            ))}
            <View style={styles.emptyOption} />
            <View style={styles.emptyOption} />
          </View>
        </View>
        {/* banner */}
        <Text style={styles.title}>Ads</Text>
        <Banner />
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

export default Home