import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ToastAndroid, KeyboardAvoidingView, Platform } from 'react-native';
import st from './styles'
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_TITLE } from '../../../constants/navigation';
import { useDispatch } from 'react-redux';
import { registerActions } from '../../../services/auth/actions';
import { validateEmail, validatePassword, validatePhone } from '../../../../utils/validate';

const Login = () => {
  const [account, setAccount] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });
  const navigation = useNavigation<any>()
  const dispatch = useDispatch<any>()
  const styles = st();

  const handleChangeAccount = (textInputName) => {
    return (value: any) => {
      setAccount({ ...account, [textInputName]: value });
    };
  };

  const showToast = () => {
    ToastAndroid.show(
      'Đăng ký thành công!',
      ToastAndroid.LONG,
    );
  };

  const handleRegister = async () => {
    if (!account.name || !account.email || !account.password) {
      ToastAndroid.show('Vui lòng điền đủ thông tin!', ToastAndroid.SHORT)
    }
    else if (validateEmail(account.email)) {
      ToastAndroid.show('Kiểm tra lại email!', ToastAndroid.SHORT)
    }
    else if (validatePhone(account.phone)) {
      ToastAndroid.show('Xem lại số điện thoại!', ToastAndroid.SHORT)
    }
    else if (validatePassword(account.password)) {
      ToastAndroid.show('Mật khẩu dài tối thiểu 8 ký tự!', ToastAndroid.SHORT)
    }
    else {
      dispatch(registerActions({
        username: account.name,
        email: account.email,
        password: account.password,
        phoneNumber: account.phone
      })).then(res =>{
        showToast()
        navigation.navigate(NAVIGATION_TITLE.LOGIN);
        setAccount({
          name: "",
          phone: "",
          email: "",
          password: "",
        });
      })
      .catch(err => ToastAndroid.show('Có lỗi!', ToastAndroid.SHORT) )
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../../assets/images/moly.png')}
      />
      <Text style={styles.slogan}>Đừng để tiền rơi</Text>
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
      <TouchableOpacity onPress={handleRegister} style={[styles.formItem, styles.formBtn]}>
        <Text style={styles.textBtn}>Đăng ký</Text>
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
