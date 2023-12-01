import { View, Text, StatusBar, Image, TouchableOpacity, Alert, Modal, TextInput, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import st from './styles'
import { useDispatch } from 'react-redux'
import { getInfoUserAction, updateInfoUserAction } from '../../services/user/actions'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';
import { BASE_URL } from '../../constants/api'
import Loading from '../../../utils/loading/Loading'

const InfoUser = () => {
    const isFocused = useIsFocused()
    const dispatch = useDispatch<any>()
    const styles = st();
    const navigation = useNavigation<any>()
    const [isLoading, setLoading] = useState(false)
    const [image, setImage] = useState(null);
    const [infoUser, setInfoUser] = useState({
        id: "",
        email: "",
        phoneNumber: "",
        urlImage: "",
        username: ""
    })
    useEffect(() => {
        getInfoUser()
    }, [isFocused])
    const getInfoUser = () => {
        // setLoading(true)
        dispatch(getInfoUserAction())
            .then(res => {
                setLoading(false)
                setInfoUser(res?.payload)
            })
            .catch(err => setLoading(false))
    }
    const handleEditInfoUser = () => {
        const imageToUpload = image
        const imageName = imageToUpload?.split('/').pop()
        const imageType = imageToUpload?.split('.').pop()
        console.log(`image/${imageType}`)
        const formdata = new FormData()
        image && formdata.append('avatar', {
            uri: imageToUpload,
            type: `image/${imageType}`,
            name: imageName
        });
        formdata.append('email', infoUser?.email)
        formdata.append('phoneNumber', infoUser?.phoneNumber)
        formdata.append('username', infoUser?.username)
        console.log('formdata', formdata)
        setLoading(true)
        dispatch(updateInfoUserAction(formdata))
            .then((res) => {
                if (res?.payload) {
                    setLoading(false)
                    ToastAndroid.show('Cập nhật thành công!', ToastAndroid.SHORT)
                    console.log(res, 'update userrrr')
                    navigation.goBack()
                } else {
                    ToastAndroid.show('Có lỗi!', ToastAndroid.SHORT)
                    setLoading(false)
                }
                console.log(res, 'update userrrr')
            })
            .catch(err => {
                console.log('Delete error', err);
                setLoading(false)
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
                <Text
                    style={{ fontWeight: '400', fontSize: 18 }}
                >Chỉnh sửa tài khoản</Text>
                <View style={styles.headerIcon} />
            </View>
            <View>
                {!(infoUser?.urlImage == '/image?imageId=null') ?
                    <Image
                        style={styles.modalAvatar}
                        source={{ uri: image ?? `${BASE_URL}${infoUser?.urlImage}` }}
                    />
                    :
                    <Image
                        style={styles.modalAvatar}
                        source={require('../../../assets/images/icon/ic_user.png')}
                    />
                }
                <TouchableOpacity
                    style={[styles.modalAvatar, { position: 'absolute', backgroundColor: 'rgba(0,0,0,0.2)' }]}
                    onPress={pickImage}>
                    <Image
                        style={{ height: 15, width: 15, position: 'absolute', bottom: 20, right: 20, tintColor: '#fff' }}
                        source={require('../../../assets/images/icon/ic_pencil.png')}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput
                style={styles.input}
                value={infoUser?.username}
                onChangeText={onChangeInfoUser('username')}
            />
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
                style={styles.input}
                value={infoUser?.email}
                onChangeText={onChangeInfoUser('email')}
            />
            <Text style={styles.inputLabel}>Số điện thoại</Text>
            <TextInput
                style={styles.input}
                value={infoUser?.phoneNumber}
                onChangeText={onChangeInfoUser('phoneNumber')}
            />
            <TouchableOpacity
                onPress={() => {
                    handleEditInfoUser()
                }}>
                <Text style={styles.button}>Lưu thay đổi</Text>
            </TouchableOpacity>
            <Loading visiable={isLoading} />
        </View>
    )
}

export default InfoUser