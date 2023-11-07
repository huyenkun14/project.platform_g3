import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH, defaultColors } from '../../theme'


export const styles = StyleSheet.create({
    container: {
        minHeight: SCREEN_HEIGHT,
        backgroundColor: defaultColors.backgroundColor,
        position: 'relative',
    },
    logo: {
        height: 40,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 25,
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: defaultColors.backgroundColor,
        shadowColor: defaultColors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4.65,
        elevation: 7,
    },
    itemIcon: {
        height: 30,
        width: 20,
        resizeMode: 'contain',
    },
    itemText: {
        marginLeft: 15,
        fontSize: 16,
    },
    logoutText: {
        color: defaultColors.text_err,
    }
})