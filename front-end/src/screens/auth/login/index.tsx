import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ToastAndroid } from 'react-native';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_TITLE } from '../../../constants/navigation';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../../services/auth/actions';
import { getItemObjectAsyncStorage, setItemAsyncStorage } from '../../../../utils/asyncStorage';
import { KEY_STORAGE } from '../../../constants/storage';

const Login = () => {
    const [account, setAccount] = useState({
        username: '',
        password: '',
    });
    const navigation = useNavigation<any>()
    const dispatch = useDispatch<any>()

    const handleChangeAccount = (textInputName) => {
        return (value: any) => {
            setAccount({ ...account, [textInputName]: value })
        }
    }

    const handleLogin = () => {

        dispatch(loginActions(account))

            .then(res => {
                console.log("res", res)
                if (res.payload) {
                    setItemAsyncStorage(KEY_STORAGE.SAVED_INFO, JSON.stringify(res.payload));
                    navigation.navigate(NAVIGATION_TITLE.TAB, { screen: NAVIGATION_TITLE.HOME })
                    setAccount({
                        username: '',
                        password: '',
                    });
                } else {
                    ToastAndroid.show('Xem lại thông tin đăng nhập!', ToastAndroid.SHORT)
                }
            })
            .catch(err => {
                console.log(err)
                ToastAndroid.show('Xem lại thông tin đăng nhập!', ToastAndroid.SHORT)
            })
        // }
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.title}>Moli</Text>
            <Text style={styles.slogan}>Đừng để tiền rơi</Text>
            <Text style={styles.inputLabel}>Username: </Text>
            <View style={styles.formItem}>
                <TextInput
                    style={styles.input}
                    value={account.username}
                    onChangeText={handleChangeAccount('username')}
                    placeholder='Nhập email/số điện thoại'
                />
            </View>
            <Text style={styles.inputLabel}>Mật khẩu:</Text>
            <View style={styles.formItem}>
                <TextInput
                    style={styles.input}
                    value={account.password}
                    onChangeText={handleChangeAccount('password')}
                    placeholder="Nhập mật khẩu"
                    secureTextEntry
                />
            </View>
            <TouchableOpacity onPress={handleLogin}>
                <View style={[styles.formItem, styles.formBtn]}>
                    <Text style={styles.textBtn}>Đăng nhập</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.register}>
                <Text style={styles.registerText}>Chưa có tài khoản? </Text>
                <TouchableOpacity onPress={() => { navigation.navigate(NAVIGATION_TITLE.REGISTER) }}>
                    <Text style={[styles.registerText, styles.registerLink]}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
            <Image
                style={styles.bg}
                source={require('../../../../assets/images/background-auth.png')}
            />
        </KeyboardAvoidingView>

    );
};

export default Login;
