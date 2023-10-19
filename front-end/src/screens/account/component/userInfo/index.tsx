import { View, Text, StatusBar, Image, ScrollView, SafeAreaView, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { getItemObjectAsyncStorage } from '../../../../../utils/asyncStorage';
import { KEY_STORAGE } from '../../../../constants/storage';

const UserInfoModal = ({ modalVisible, setModalVisible }) => {
    const navigation = useNavigation<any>()
    const [image, setImage] = useState(null);
    const [avatar, setAvater] = useState(null);
    const [token, setToken] = useState();
    useEffect(() => { 
        getToken()
        getAvatar()
     }, [])
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
    const getToken = async () => {
        const access = await getItemObjectAsyncStorage(KEY_STORAGE.SAVED_INFO);
        setToken(access.accessToken)
    }
    const uploadAvatar = async () => {
        if (image) {
            const imageToUpload = image
            const imageName = imageToUpload.split('/').pop()
            const imageType = imageToUpload.split('.').pop()
            console.log(`image/${imageType}`)
            const formdata = new FormData()
            formdata.append('image', {
                uri: imageToUpload,
                type: `image/${imageType}`,
                name: imageName
            });
            const data = formdata;
            console.log('data', data)
            const headers = {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
            const res = await axios.post('http://10.0.2.2:3000/api/v1/image/upload', data, {

                headers: headers,
                transformRequest: (data) => {
                    return data;
                },
            })
            console.log(res)
        } else {
            alert('Please Select File first');
        }
    }
    const getAvatar = async () => {
            const headers = {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
            const res = await axios.get('http://10.0.2.2:3000/api/image?imageId=1', {
                headers: headers,
            })
            console.log(res, 'get avatar')
        
    }
    return (
        <SafeAreaView>
            <StatusBar />
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
            >
                <View style={styles.imageContainer}>
                    {image && <Image source={{ uri: image }} style={{ width: 80, height: 80, resizeMode: 'contain', borderRadius: 10 }} />}
                </View>
                <TouchableOpacity onPress={pickImage}>
                    <Text style={styles.imageEdit}>Chỉnh sửa</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={uploadAvatar}>
                    <Text style={styles.imageEdit}>Tải lên</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                    <Text style={styles.cancel}>Trở về</Text>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView >
    )
}

export default UserInfoModal