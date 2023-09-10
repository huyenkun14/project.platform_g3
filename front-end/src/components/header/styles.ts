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
        height: 40,
        width: 40,
        justifyContent: 'center',
    },
    backIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000'
    },
    avatar: {
        height: 40,
        width: 40,
        resizeMode: 'cover',
        borderRadius: 8,
    }
})