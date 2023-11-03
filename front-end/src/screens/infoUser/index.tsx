import { View, Text, StatusBar, Image, TouchableOpacity, Alert, Modal, TextInput, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { getInfoUserAction, updateInfoUserAction } from '../../services/user/actions'
import Header from '../../components/header'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';

const InfoUser = () => {
    const dispatch = useDispatch<any>()
    const navigation = useNavigation<any>()
    const [modalVisible, setModalVisible] = useState(false)
    const [image, setImage] = useState(null);
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
    }, [modalVisible])
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
                if (res?.payload) {
                    Alert.alert('Cập nhật thành công')
                    console.log(res, 'update userrrr')
                    setModalVisible(false)
                } else ToastAndroid.show('Có lỗi!', ToastAndroid.SHORT)
                console.log(res, 'update userrrr')
            })
            .catch(err => {
                console.log('Delete error', err);
            });
    }
    const onChangeInfoUser = (name) => {
        return (value: any) => {
            setInfoUser({ ...infoUser, [name]: value })
            console.log('infoUser', infoUser)
        }
    }
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [5, 5],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            console.log(result)
        }
    };
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
                <TouchableOpacity onPress={() => { setModalVisible(true) }}>
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
            {/* Popup Edit */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalInner}>
                        <View>
                            <Image
                                style={styles.modalAvatar}
                                source={require('../../../assets/images/icon/ic_user.png')}
                            />
                            <TouchableOpacity
                                style={[styles.modalAvatar, { position: 'absolute', backgroundColor: 'rgba(0,0,0,0.5)' }]}
                                onPress={() => { pickImage }}>
                                <Image
                                    style={{ height: 15, width: 15, position: 'absolute', bottom: 10, left: 10, tintColor: '#fff' }}
                                    source={require('../../../assets/images/icon/ic_pencil.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text>Username</Text>
                        <TextInput
                            style={styles.input}
                            value={infoUser?.username}
                            onChangeText={onChangeInfoUser('username')}
                        />
                        <Text>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={infoUser?.email}
                            onChangeText={onChangeInfoUser('email')}
                        />
                        <Text>Số điện thoại</Text>
                        <TextInput
                            style={styles.input}
                            value={infoUser?.phoneNumber}
                            onChangeText={onChangeInfoUser('phoneNumber')}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                                <Text style={styles.button}>Hủy Bỏ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleEditInfoUser}>
                                <Text style={styles.button}>Lưu thay đổi</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default InfoUser