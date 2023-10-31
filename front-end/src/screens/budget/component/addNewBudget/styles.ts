import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH, defaultColors } from "../../../../theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultColors.backgroundColor,
        minHeight: SCREEN_HEIGHT,
    },
    closeIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80,
        marginBottom: 25
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
    dropdownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dropdownView: {
        // width: SCREEN_WIDTH * 0.5,
        paddingHorizontal: 25
    },
    dropdown: {
        // borderColor: defaultColors.backgroundColor,
        borderRadius: 10,
    },
    inputLabel: {
        fontSize: 15,
        marginBottom: 12,
        fontWeight: '500',
        color: defaultColors.text_3,
        marginLeft: 10
    },
    input: {
        color: defaultColors.text_1,
        fontSize: 13.5,
        paddingHorizontal: 10,
        borderRadius: 10,
        height: 50,
        overflow: 'hidden',
        backgroundColor: defaultColors.backgroundColor,
    },
    inputLabelContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 25
    },
    inputLabelIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        tintColor: defaultColors.text_3,
    },
    moneyText: {
        position: 'absolute',
        right: 15,
        top: 15,
        fontSize: 14,
        fontWeight: '400',
        color: defaultColors.text_3,
    },
    addBtn: {
        textAlign: 'center',
        marginVertical: 20,
        paddingVertical: 15,
        marginHorizontal: 25,
        borderRadius: 10,
        fontSize: 16,
        fontWeight:'600',
        backgroundColor: defaultColors.tabActive,
        color: defaultColors.text_white
    },
    shadow: {
        marginBottom: 20,
        borderColor: defaultColors.text_1,
        borderWidth: 1,
        marginHorizontal: 25,
        borderRadius: 10,
    },
})