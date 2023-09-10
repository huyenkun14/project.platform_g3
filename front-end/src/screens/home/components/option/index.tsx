import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Option = (props) => {
    const { icon, title } = props
    return (
        <View style={styles.optionContainer}>
            <TouchableOpacity>
                <View style={styles.optionIconContainer}>
                    <Image source={icon} style={styles.optionIcon} />
                </View>
            </TouchableOpacity>
            <Text style={styles.optionText}>{title}</Text>
        </View>
    )
}

export default Option