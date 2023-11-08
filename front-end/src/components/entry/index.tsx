
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { NAVIGATION_TITLE } from '../../constants/navigation';
import moment from 'moment';
import { formatMoneyWithVND } from '../../../utils/formatMoney';
import { BASE_URL } from '../../constants/api';
import st from './styles'

const Entry = (props: any) => {

  const { title, time, price, note, status, entryId, imageUrl } = props
  const navigation = useNavigation<any>()

  const styles = st();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(NAVIGATION_TITLE.DETAIL, { entryId })}>
      <View style={styles.typeContainer}>
        {time === moment().format('YYYY-MM-DD') ?
          <View style={styles.newIcon} />
          : ''
        }
        <View style={styles.image}>
          <Image style={styles.imageIcon} resizeMode='stretch' source={{ uri: imageUrl ? `${BASE_URL}${imageUrl}` : 'https://cdn-icons-png.flaticon.com/512/447/447120.png' }} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text numberOfLines={1} style={[styles.content, styles.note]}>{note}</Text>
        </View>
      </View>
      <View>
        {status ?
          <Text style={[styles.title, styles.money, styles.alignRight]}>+ {formatMoneyWithVND(price)}</Text>
          :
          <Text style={[styles.title, styles.money, styles.alignRight]}>- {formatMoneyWithVND(price)}</Text>
        }
        <Text style={[styles.content, styles.alignRight]}>{moment(time).format('DD-MM-YYYY')}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Entry