import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH, defaultColors } from "../../theme";

export const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalInner: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: defaultColors.backgroundColor,
        // paddingHorizontal: 40,
        // paddingVertical: 40,
        padding: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: defaultColors.titleColor,
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
    },
    closeIcon: {
        height: 18,
        width: 18,
        resizeMode: 'contain',
    },
    empty: {
        height: 18,
        width: 18,
    },
    inputLabel: {
        fontSize: 15,
        marginTop: 20,
        marginBottom: 10,
        fontWeight: '500',
        color: defaultColors.BLACK,
    },
    input: {
        color: defaultColors.text_1,
        fontSize: 14,
        paddingHorizontal: 15,
        borderRadius: 5,
        height: 50,
        overflow: 'hidden',
        backgroundColor: defaultColors.backgroundColor,
    },
    checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        // paddingHorizontal: 30
    },
    checkboxView:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: 8,
    },
    addImage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        height: 50,
        borderColor: defaultColors.borderColor,
        borderWidth: 2,
        borderStyle: 'dotted',
    },
    addImageIcon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
    addImageText: {
        marginLeft: 10,
    },
    button: {
        backgroundColor: defaultColors.tabActive,
        paddingVertical: 15,
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 16,
        color: defaultColors.text_white,
        marginTop: 30,

    },
    shadow: {
        borderRadius: 5,
        borderColor: defaultColors.borderColor,
        borderWidth: 1.5,
        backgroundColor: defaultColors.backgroundColor,
        // shadowColor: defaultColors.shadowColor,
        // shadowOffset: {
        //   width: 0,
        //   height: 3,
        // },
        // shadowOpacity: 0.15,
        // shadowRadius: 4.65,
        // elevation: 7,
    },
})