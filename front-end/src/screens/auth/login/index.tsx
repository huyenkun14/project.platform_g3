import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import { TextInput, GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles } from './styles' 
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        navigation.navigate('Home'); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Email: </Text>
            <TextInput onChangeText={text => setEmail(text)}
            value={email}
            placeholder='Nhập email' />

            <Text>Mật khẩu:</Text>
            <TextInput  onChangeText={text => setPassword(text)}
             value={password}
             placeholder="Nhập mật khẩu"
             secureTextEntry />
            <Button title="Đăng nhập" onPress={handleLogin} />
       </View>

  );
};

export default LoginScreen;
