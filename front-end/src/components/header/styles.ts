import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    back: {
        height: 35,
        width: 35,
        justifyContent: 'center',
    },
    backIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000'
    },
    avatar: {
        height: 35,
        width: 35,
        resizeMode: 'contain'
    }
})