import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH, defaultColors } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        minHeight: SCREEN_HEIGHT,
        backgroundColor: defaultColors.backgroundColor,
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        paddingHorizontal: 25,
    },
    optionBtn: {
        width: 120,
        backgroundColor: defaultColors.flatListItem,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 20,
        paddingVertical: 10,
        shadowColor: defaultColors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    optionText: {
        textAlign: 'center',
        color: defaultColors.text_white,
        fontWeight: '500',
        fontSize: 14,
    }
})