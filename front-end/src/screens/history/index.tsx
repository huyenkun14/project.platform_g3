import { View, Text, FlatList, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import st from './styles'
import Header from '../../components/header'
import Entry from '../../components/entry'
import moment from 'moment';
import DatePicker from '@react-native-community/datetimepicker';
import { getAllEntryAction, getEntryByMonthAction } from '../../services/entry/actions'
import { useDispatch } from 'react-redux'
import { useIsFocused } from '@react-navigation/native';
import Loading from '../../../utils/loading/Loading'

const History = () => {
  const isFocused = useIsFocused()
  const [showDatePicker, setShowDatePicker] = useState(false);
  const styles = st();
  const [date, setDate] = useState<Date>(new Date());
  const dispatch = useDispatch<any>()
  const [listEntry, setListEntry] = useState([])
  const [loading, setLoading] = useState(false)
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };
  useEffect(() => {
    getListEntry()
  }, [isFocused, date]);
  const getListEntry = () => {
    const month = moment(date).format("MM-YYYY")
    setLoading(true)
    dispatch(getEntryByMonthAction(month))
      .then(res => {
        setListEntry(res?.payload)
        setLoading(false)
      })
      .catch(err => setLoading(false))
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <Header title='Lịch sử giao dịch' />
        <View style={styles.timeContainer}>
          <TouchableOpacity
            style={styles.timeIconView}
            onPress={() => { setShowDatePicker(true) }}
          >
            <Image
              style={styles.timeIcon}
              source={require('../../../assets/images/icon/ic_calendar.png')}
            />
          </TouchableOpacity>
          <Text style={styles.timeText}>{moment(date).format("MM-YYYY")}</Text>
        </View>
        <View>
          {listEntry?.length > 0 ? listEntry?.map((item, index) => (
            <Entry
              entryId={item.transactionId}
              key={index}
              title={item.category.title}
              time={item.date}
              price={item.amount}
              note={item.description}
              status={item.category.value}
              imageUrl={item.category.urlIcon}
            />
          )) : <Text style={{ textAlign: 'center', marginTop: 50 }}>Không có giao dịch.</Text>}

        </View>
        {showDatePicker &&
          <DatePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        }
      </ScrollView>
      <Loading visiable={loading} />
    </SafeAreaView>
  )
}

export default History