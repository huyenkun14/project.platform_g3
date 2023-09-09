import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Entry = (props: any) => {
  const { title, time, price, note, iconSource } = props
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.typeContainer}>
          <Image
             source={iconSource}
             style={styles.image}
            
          
          />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text numberOfLines={1} style={[styles.content, styles.note]}>{note}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.title}>{price}</Text>
          <Text style={[styles.content, styles.alignRight]}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Entry