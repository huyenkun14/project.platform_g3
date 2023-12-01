import { ScrollView, View, Text, FlatList, Image, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import st from './styles'
import Header from '../../components/header'
import Banner from './components/banner'
import Entry from '../../components/entry'
import Option from './components/option'
import { NAVIGATION_TITLE } from '../../constants/navigation'
import { getItemObjectAsyncStorage } from '../../../utils/asyncStorage'
import { KEY_STORAGE } from '../../constants/storage'
import { useDispatch } from 'react-redux'
import { getLastEntryAction } from '../../services/entry/actions'
import { getInfoUserAction } from '../../services/user/actions'
import Loading from '../../../utils/loading/Loading'
import { formatMoneyNotVND } from '../../../utils/formatMoney'
import { useIsFocused } from '@react-navigation/native';

const Home = () => {
  const isFocused = useIsFocused()
  const dispatch = useDispatch<any>()
  const styles = st();
  const [listEntry, setListEntry] = useState([])
  const [loading, setLoading] = useState<boolean>(false)
  const [infoUser, setInfoUser] = useState({
    id: "",
    email: "",
    phoneNumber: "",
    totalIncomeMoney: "",
    totalSpendingMoney: "",
    urlImage: "",
    username: ""
  })
  const optionsData = [
    // {
    //   id: 1,
    //   title: 'Quản lý',
    //   icon: require('../../../assets/images/icon/ic_manager.png')
    // },
    {
      id: 2,
      title: 'Giao diện',
      icon: require('../../../assets/images/icon/ic_moon.png'),
      theme: true
    },
    {
      id: 3,
      title: 'Ngân sách',
      icon: require('../../../assets/images/icon/ic_coins.png'),
      router: NAVIGATION_TITLE.BUDGET
    },
    {
      id: 4,
      title: 'Nhắc nhở',
      icon: require('../../../assets/images/icon/ic_bell.png'),
      router: NAVIGATION_TITLE.NOTIFICATION
    },
    // {
    //   id: 5,
    //   title: 'Tìm kiếm',
    //   icon: require('../../../assets/images/icon/ic_search.png')
    // },
    {
      id: 6,
      title: 'Tài khoản',
      icon: require('../../../assets/images/icon/ic_account.png'),
      router: NAVIGATION_TITLE.ACCOUNT
    }
  ]
  const overview = [
    {
      id: '1',
      title: 'Tổng thu nhập',
      money: formatMoneyNotVND(Number(infoUser?.totalIncomeMoney)),
      unit: 'VNĐ'
    },
    {
      id: '2',
      title: 'Tổng chi tiêu',
      money: formatMoneyNotVND(Number(infoUser?.totalSpendingMoney)),
      unit: 'VNĐ'
    },
    {
      id: '3',
      title: 'Số dư',
      money: formatMoneyNotVND(Number(Number(infoUser?.totalIncomeMoney) - Number(infoUser?.totalSpendingMoney))),
      unit: 'VNĐ'
    },
  ]
  useEffect(() => {
    getUserInfoSaved();
    getListEntry()
    getInfoUser()
  }, [isFocused]);

  const getUserInfoSaved = async () => {
    const userInfo = await getItemObjectAsyncStorage(KEY_STORAGE.SAVED_INFO);
    console.log('user info', userInfo);
  };
  const getListEntry = () => {
    setLoading(false)
    dispatch(getLastEntryAction(5))
      .then(res => {
        setLoading(false)
        console.log(res, 'list entryyyyyyyyyyyyyyy')
        const converListEntry = res?.payload.slice(-5)
        setListEntry(converListEntry)
      })
      .catch(err => {
        setLoading(false)
        console.log('err', err)
      })
  }
  const getInfoUser = () => {
    setLoading(false)
    dispatch(getInfoUserAction())
      .then(res => {
        setLoading(false)
        setInfoUser(res?.payload)
      })
      .catch(err => {
        setLoading(false)
        console.log('err', err)
      })
  }
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
        <Text style={styles.overviewItemMoney}>{item.money}</Text>
      </View>
    </View>
  )
  return (
    <SafeAreaView>
      <StatusBar />
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
          <Text style={styles.title}>Tiện ích</Text>
          <View style={styles.optionContainer}>
            {optionsData.map((item) => (
              <Option title={item.title} icon={item.icon} key={item.id} router={item.router} theme={item?.theme} />
            ))}
            {/* <View style={styles.emptyOption} />
            <View style={styles.emptyOption} /> */}
          </View>
        </View>
        {/* banner */}
        <Text style={styles.title}>Ads</Text>
        <Banner />
        {/* last entries */}
        <View style={{ paddingBottom: 60 }}>
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
            <Text style={{ textAlign: 'center', paddingBottom: 50 }}>Không có giao dịch gần đây</Text>
          }
        </View>
      </ScrollView>
      <Loading visiable={loading} />
    </SafeAreaView>
  )
}

export default Home