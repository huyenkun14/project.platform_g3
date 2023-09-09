import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Header = (props: any) => {
    const { isBack, title } = props
    return (
        <View style={styles.container}>
            {isBack ?
                <View style={styles.back}>
                    <Image
                        source={require('../../../assets/images/icon/ic_arrow.png')}
                        style={styles.backIcon}
                    />
                </View>
                :
                <View style={styles.back} />
            }
            <Text style={styles.title}>{title}</Text>
            <Image
                source={require('../../../assets/images/icon/ic_user.png')}
                style={styles.avatar}
            />
            
        </View>
    )
}

export default Header