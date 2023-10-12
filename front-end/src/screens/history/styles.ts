import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingBottom: 80,
        minHeight: SCREEN_HEIGHT,
    },
    title: {
        fontSize: 30,
        color: '#000',
        margin: 10,
    }
})