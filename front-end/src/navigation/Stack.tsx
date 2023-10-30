import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyBottomTabs from './BottomTab';
import EntryDetail from '../screens/entryDetail';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import { NAVIGATION_TITLE } from '../constants/navigation';
import Account from '../screens/account';
import Budget from '../screens/budget';
import InfoUser from '../screens/infoUser';

const Stack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName={NAVIGATION_TITLE.LOGIN} screenOptions={{headerShown: false}}>
            <Stack.Screen name={NAVIGATION_TITLE.TAB} component={MyBottomTabs} />
            <Stack.Screen name={NAVIGATION_TITLE.DETAIL} component={EntryDetail} />
            <Stack.Screen name={NAVIGATION_TITLE.LOGIN} component={Login} />
            <Stack.Screen name={NAVIGATION_TITLE.REGISTER} component={Register} />
            <Stack.Screen name={NAVIGATION_TITLE.ACCOUNT} component={Account} />
            <Stack.Screen name={NAVIGATION_TITLE.BUDGET} component={Budget} />
            <Stack.Screen name={NAVIGATION_TITLE.INFO_USER} component={InfoUser} />
        </Stack.Navigator>
    )
}

export default Stack