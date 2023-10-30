import { View, Text, StatusBar, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { getInfoUserAction, updateInfoUserAction } from '../../services/user/actions'
import Header from '../../components/header'
import { useNavigation } from '@react-navigation/native'

const InfoUser = () => {
    const dispatch = useDispatch<any>()
    const navigation = useNavigation<any>()
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
    }, [])
    const getInfoUser = () => {
        dispatch(getInfoUserAction())
            .then(res => {
                console.log(res, "info userrrrrrrr")
                setInfoUser(res?.payload)
            })
            .catch(err => console.log('err', err))
    }
    const handleEditInfoUser = () => {
        dispatch(updateInfoUserAction(infoUser))
            .then((res) => {
                Alert.alert('Cập nhật thành công')
                console.log(res, 'update userrrr')
            })
            .catch(err => {
                console.log('Delete error', err);
            });
    }
    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Image
                        style={styles.headerIcon}
                        source={require('../../../assets/images/icon/ic_arrowLeft.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleEditInfoUser}>
                    <Image
                        style={styles.headerIcon}
                        source={require('../../../assets/images/icon/ic_pencil.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={require('../../../assets/images/icon/ic_user.png')}
                />
            </View>
            <Text style={styles.usernameText}>{infoUser?.username}</Text>
            <View style={styles.infoContainer}>
                <Image
                    style={styles.infoIcon}
                    source={require('../../../assets/images/icon/ic_envelope.png')}
                />
                <Text style={styles.infoText}>{infoUser?.email}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Image
                    style={styles.infoIcon}
                    source={require('../../../assets/images/icon/ic_phone.png')}
                />
                <Text style={styles.infoText}>{infoUser?.phoneNumber}</Text>
            </View>
            <View style={styles.amountContainer}>
                <View style={styles.amountItem}>
                    <Image
                        style={styles.amountIcon}
                        source={require('../../../assets/images/icon/ic_saving.png')}
                    />
                    <Text style={styles.amountLabel}>Tổng thu nhập</Text>
                    <Text style={styles.amountText}>{infoUser?.totalIncomeMoney}</Text>
                </View>
                <View style={styles.amountItem}>
                    <Image
                        style={styles.amountIcon}
                        source={require('../../../assets/images/icon/ic_coins.png')}
                    />
                    <Text style={styles.amountLabel}>Tổng chi tiêu</Text>
                    <Text style={styles.amountText}>{infoUser?.totalSpendingMoney}</Text>
                </View>
            </View>
        </View>
    )
}

export default InfoUser