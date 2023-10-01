
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { styles } from './styles'
import { NAVIGATION_TITLE } from '../../constants/navigation';

const Entry = (props: any) => {

  const { title, time, price, note, status} = props
  const navigation = useNavigation<any>()
  const money = Number(price).toLocaleString('en')

  return (
    <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION_TITLE.DETAIL,{title, time, price, note, status})}>
      <View style={styles.container}>
        <View style={styles.typeContainer}>
          <View style={styles.image} />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text numberOfLines={1} style={[styles.content, styles.note]}>{note}</Text>
          </View>
        </View>
        <View>
          {status === 'chi tiêu' ?
            <Text style={[styles.title, styles.money, styles.alignRight]}>- {money}</Text>
            :
            <Text style={[styles.title, styles.money, styles.alignRight]}>+ {money}</Text>
          }
          <Text style={[styles.content, styles.alignRight]}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Entry