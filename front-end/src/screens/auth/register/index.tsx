import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_TITLE } from '../../../constants/navigation';

const Login = () => {
  const [account, setAccount] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });
  const [errText, setErrText] = useState('')
  const navigation = useNavigation<any>()

  const handleChangeAccount = (textInputName) => {
    return (value: any) => {
      setAccount({ ...account, [textInputName]: value })
    }
  }

  const handleRegister = () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (!account.name || !account.phone || !account.email || !account.password) {
      setErrText('Không được để trống!')
    }
    else if (!regex.test(account.email)) {
      setErrText('Kiểm tra lại email')
    }
    else {
      navigation.navigate(NAVIGATION_TITLE.LOGIN);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <Text style={styles.title}>Moli</Text>
        <Text style={styles.slogan}>Đừng để tiền rơi</Text>
        {errText ? <Text style={styles.error}>* {errText}</Text> : ''}
        <Text style={styles.inputLabel}>Tên: </Text>
        <View style={styles.formItem}>
          <TextInput
            style={styles.input}
            value={account.name}
            onChangeText={handleChangeAccount('name')}
            placeholder='Nhập tên'
          />
        </View>
        <Text style={styles.inputLabel}>Số điện thoại: </Text>
        <View style={styles.formItem}>
          <TextInput
            style={styles.input}
            value={account.phone}
            onChangeText={handleChangeAccount('phone')}
            placeholder='Nhập số điện thoại'
            keyboardType='phone-pad'
          />
        </View>
        <Text style={styles.inputLabel}>Email: </Text>
        <View style={styles.formItem}>
          <TextInput
            style={styles.input}
            value={account.email}
            onChangeText={handleChangeAccount('email')}
            placeholder='Nhập email'
            keyboardType='email-address'
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
        <TouchableOpacity onPress={handleRegister}>
          <View style={[styles.formItem, styles.formBtn]}>
            <Text style={styles.textBtn}>Đăng ký</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.register}>
          <Text style={styles.registerText}>Đã có tài khoản? </Text>
          <TouchableOpacity onPress={() => { navigation.navigate(NAVIGATION_TITLE.LOGIN) }}>
            <Text style={[styles.registerText, styles.registerLink]}>Đăng nhập</Text>
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
