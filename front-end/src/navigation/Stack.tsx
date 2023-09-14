import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyBottomTabs from './BottomTab';
import EntryDetail from '../screens/entryDetail';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';

const Stack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tab" component={MyBottomTabs} />
            <Stack.Screen name="EntryDetail" component={EntryDetail} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default Stack