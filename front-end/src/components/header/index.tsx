import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

const Header = (props: any) => {
    const { isBack, title } = props
    const navigation = useNavigation<any>()
    return (
        <View style={styles.container}>
            {isBack ?
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.back}>
                        <Image
                            source={require('../../../assets/images/icon/ic_arrowLeft.png')}
                            style={styles.backIcon}
                        />
                    </View>
                </TouchableOpacity>
                :
                <View style={styles.back} />
            }
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity>
                <Image
                    source={require('../../../assets/images/icon/ic_user.png')}
                    style={styles.avatar}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Header