import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyBottomTabs from './BottomTab';
import EntryDetail from '../screens/entryDetail';

const Stack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tab" component={MyBottomTabs} />
            <Stack.Screen name="EntryDetail" component={EntryDetail} />
        </Stack.Navigator>
    )
}

export default Stack