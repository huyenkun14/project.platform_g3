import { StyleSheet } from 'react-native'
import { defaultColors } from '../../../theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 40,
        backgroundColor: defaultColors.backgroundColor,
    },
    logo: {
        height: 60,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    slogan: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 15,
        color: defaultColors.text_1,
    },
    error: {
        color: defaultColors.text_err,
        textAlign: 'center',
        marginTop: 20,
        fontStyle: 'italic', 
        fontSize: 13,
    },
    inputLabel: {
        fontSize: 15,
        marginTop: 20,
        marginBottom: 10,
        fontWeight: '500',
        color: defaultColors.text_3,
    },
    input: {
        color: defaultColors.text_1,
        fontSize: 14,
        paddingHorizontal: 20,
        borderRadius: 10,
        height: 50,
        overflow: 'hidden',
        backgroundColor: defaultColors.backgroundColor,
    },
    formItem: {
        borderRadius: 10,
        backgroundColor: defaultColors.backgroundColor,
        justifyContent: 'center',
        shadowColor: defaultColors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4.65,
        elevation: 7,
    },
    formBtn: {
        backgroundColor: defaultColors.titleColor,
        height: 50,
        borderRadius: 10,
        marginTop: 30,
    },
    textBtn: {
        textAlign: 'center',
        color: defaultColors.text_white,
        fontWeight: '500',
        fontSize: 15,
    },
    register: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'center',
    },
    registerText: {
        color: defaultColors.text_1,
    },
    registerLink: {
        fontWeight: '500',
        color: defaultColors.text_err,
    },
    bg: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        resizeMode: 'cover',
        zIndex: -10,
        opacity: 0.15,
    }
})