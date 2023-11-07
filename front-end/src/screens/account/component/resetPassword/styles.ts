import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH, defaultColors } from '../../../../theme'


export const styles = StyleSheet.create({
    container: {
        minHeight: SCREEN_HEIGHT,
        backgroundColor: defaultColors.backgroundColor,
        justifyContent: 'center',
        paddingHorizontal: 25,
    },
    logo: {
        height: 50,
        resizeMode: 'stretch',
        alignSelf: 'center',
    },
    inputLabel: {
        marginBottom: 8,
        fontWeight: '500',
        color: defaultColors.text_1,
    },
    input: {
        padding: 8,
        borderColor: defaultColors.borderColor,
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 16,
    },
    button: {
        height: 40,
        borderRadius: 8,
        width: SCREEN_WIDTH / 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: defaultColors.tabActive
    },
    buttonText: {
        fontWeight: '500',
        color: defaultColors.text_white,
    },
})