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
            <TouchableOpacity style={styles.optionIconContainer} onPress={() => navigation.navigate(router)}>
                <Image source={icon} style={styles.optionIcon} />
            </TouchableOpacity>
            <Text style={styles.optionText}>{title}</Text>
        </View>
    )
}

export default Option