import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyBottomTabs from './BottomTab';
import LoginScreen from '../screens/auth/login';
import Home from '../screens/home';

const Stack = () => {
    const Stack = createNativeStackNavigator();
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Tab" component={MyBottomTabs} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator >
    )
}

export default Stack