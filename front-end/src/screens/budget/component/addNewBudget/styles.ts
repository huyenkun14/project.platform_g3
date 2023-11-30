import { StyleSheet } from "react-native";
import useTheme from "../../../../hooks/useTheme";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../../../utils/Dimension";

const styles = () => {
    const theme = useTheme();
    const st = StyleSheet.create({
        container: {
            backgroundColor: theme.backgroundColor,
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
            backgroundColor: theme.flatListItem,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        timeIcon: {
            height: 20,
            width: 20,
            resizeMode: 'contain',
            tintColor: theme.text_white
        },
        timeText: {
            marginLeft: 20,
            fontSize: 16,
            color: theme.text_1,
        },
        newClassify: {
            height: 50,
            width: SCREEN_WIDTH * 0.3,
            backgroundColor: theme.flatListItem,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        newClassifyIcon: {
            height: 30,
            width: 20,
            resizeMode: 'contain',
            tintColor: theme.backgroundColor
        },
        dropdownContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        dropdownView: {
            // width: SCREEN_WIDTH * 0.5,
            paddingHorizontal: 25,
        },
        dropdown: {
            // borderColor: theme.backgroundColor,
            borderRadius: 10,
        },
        inputLabel: {
            fontSize: 15,
            marginBottom: 12,
            fontWeight: '500',
            color: theme.BLACK,
            marginLeft: 10
        },
        input: {
            color: theme.text_1,
            fontSize: 13.5,
            paddingHorizontal: 10,
            borderRadius: 10,
            height: 50,
            overflow: 'hidden',
            backgroundColor: theme.backgroundColor,
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
            tintColor: theme.BLACK,
        },
        moneyText: {
            position: 'absolute',
            right: 15,
            top: 15,
            fontSize: 14,
            fontWeight: '400',
            color: theme.text_3,
        },
        addBtn: {
            justifyContent: 'center',
            alignItems: "center",
            height: 50,
            backgroundColor: theme.tabActive,
            borderRadius: 8,
            marginHorizontal: 16
        },
        addBtnText: {
            fontSize: 16,
            fontWeight: '600',
            color: theme.text_white
        },
        shadow: {
            marginBottom: 20,
            borderColor: theme.text_1,
            borderWidth: 1,
            marginHorizontal: 25,
            borderRadius: 10,
        },
    })
    return st;
}

export default styles