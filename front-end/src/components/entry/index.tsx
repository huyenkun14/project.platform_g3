import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Entry = (props:any) => {
  const {title, time, price, unit} = props
  return (
    <View style={styles.container}>
      <View style={styles.typeContainer}>
        <View style={styles.image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{time}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>{price}</Text>
        <Text style={[styles.content, styles.alignRight]}>{unit}</Text>
      </View>
    </View>
  )
}

export default Entry