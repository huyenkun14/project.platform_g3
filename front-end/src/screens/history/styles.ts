import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, defaultColors } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingBottom: 80,
        minHeight: SCREEN_HEIGHT,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    timeIconView: {
        height: 40,
        width: 40,
        backgroundColor: defaultColors.flatListItem,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        tintColor: defaultColors.text_white
    },
    timeText: {
        marginLeft: 20,
        fontSize: 16,
        color: defaultColors.text_1,
    },
})