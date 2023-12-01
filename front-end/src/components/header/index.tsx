import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { NAVIGATION_TITLE } from '../../constants/navigation'
import { getInfoUserAction } from '../../services/user/actions'
import { useDispatch } from 'react-redux'
import { BASE_URL } from '../../constants/api'
import st from './styles'

const Header = (props: any) => {
    const { isBack, title } = props
    const isFocused = useIsFocused()
    const dispatch = useDispatch<any>()
    const navigation = useNavigation<any>()
    const styles = st();
    const [infoUser, setInfoUser] = useState({
        id: "",
        email: "",
        phoneNumber: "",
        totalIncomeMoney: "",
        totalSpendingMoney: "",
        urlImage: "",
        username: ""
    })
    useEffect(() => {
        getInfoUser()
    }, [isFocused])
    const getInfoUser = () => {
        dispatch(getInfoUserAction())
            .then(res => {
                setInfoUser(res?.payload)
            })
            .catch(err => console.log('err', err))
    }
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
            <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION_TITLE.ACCOUNT)}>
                {infoUser?.urlImage ?
                    <Image
                        source={{ uri: `${BASE_URL}${infoUser.urlImage}` }}
                        style={styles.avatar}
                    />
                    :
                    <Image
                        source={require('../../../assets/images/icon/ic_user.png')}
                        style={styles.avatar}
                    />
                }
            </TouchableOpacity>
        </View>
    )
}

export default Header