import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { NAVIGATION_TITLE } from '../../../../constants/navigation'
import { useNavigation } from '@react-navigation/native'

const Option = (props) => {
    const navigation = useNavigation<any>()
    const { icon, title, router } = props
    return (
        <View style={styles.optionContainer}>
            <TouchableOpacity onPress={() => navigation.navigate(router)}>
                <View style={styles.optionIconContainer}>
                    <Image source={icon} style={styles.optionIcon} />
                </View>
            </TouchableOpacity>
            <Text style={styles.optionText}>{title}</Text>
        </View>
    )
}

export default Option