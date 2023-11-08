import { View, Text, StatusBar, Image, ScrollView, SafeAreaView, TouchableOpacity, Modal, TextInput, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import st from './styles';
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import { resetPasswordAction } from '../../../../services/user/actions';


const ResetPasswordModal = ({ modalVisible, setModalVisible }) => {
    const navigation = useNavigation<any>()
    const styles = st();
    const dispatch = useDispatch<any>()
    const [textChange, setTextChange] = useState({
        oldPass: '',
        newPass: '',
        reNewPass: '',
    });

    useEffect(() => {

    }, [])
    const handleResetPassword = () => {
        if (!textChange.newPass || !textChange.oldPass || !textChange.reNewPass) {
            ToastAndroid.show('Phải điền đủ tất cả các ô.', ToastAndroid.SHORT)
        }
        else if (textChange.newPass && textChange.newPass !== textChange.reNewPass) {
            ToastAndroid.show('Mật khẩu nhập lại không đúng.', ToastAndroid.SHORT)
        }
        else {
            dispatch(resetPasswordAction({
                prePassword: textChange.oldPass,
                password: textChange.newPass
            }))
                .then(res => {
                    if (res?.payload) {
                        console.log(res)
                        ToastAndroid.show('Đổi mật khẩu thành công', ToastAndroid.SHORT)
                        setModalVisible(false)
                        setTextChange({
                            oldPass: '',
                            newPass: '',
                            reNewPass: '',
                        })
                    } else ToastAndroid.show('Mật khẩu cũ không đúng.', ToastAndroid.SHORT)
                })
                .catch(err => ToastAndroid.show('Có lỗi', ToastAndroid.SHORT))
        }
    }

    const onChangeText = (name) => {
        return (value: any) => {
            setTextChange({ ...textChange, [name]: value })
        }
    }
    return (
        <SafeAreaView>
            <StatusBar />
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
            >
                <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../../../../assets/images/moly.png')}
                />
                    <Text style={styles.inputLabel}>Mật khẩu cũ</Text>
                    <TextInput
                        style={styles.input}
                        value={textChange.oldPass}
                        onChangeText={onChangeText('oldPass')}
                        secureTextEntry
                    />
                    <Text style={styles.inputLabel}>Mật khẩu mới</Text>
                    <TextInput
                        style={styles.input}
                        value={textChange.newPass}
                        onChangeText={onChangeText('newPass')}
                        secureTextEntry
                    />
                    <Text style={styles.inputLabel}>Nhập lại mật khẩu mới</Text>
                    <TextInput
                        style={styles.input}
                        value={textChange.reNewPass}
                        onChangeText={onChangeText('reNewPass')}
                        secureTextEntry
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                            <Text style={styles.buttonText}>Thay đổi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                setModalVisible(false)
                                setTextChange({
                                    oldPass: '',
                                    newPass: '',
                                    reNewPass: '',
                                })
                            }}>
                            <Text style={styles.buttonText}>Trở về</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView >
    )
}

export default ResetPasswordModal