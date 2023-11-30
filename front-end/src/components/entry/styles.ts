import { StyleSheet } from "react-native";
import useTheme from "../../hooks/useTheme";
import { SCREEN_WIDTH } from "../../../utils/Dimension";

const styles = () => {
    const theme = useTheme();

    const st = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 25,
            paddingVertical: 10,
            borderRadius: 8,
            borderTopColor: theme.borderColor,
            borderTopWidth: 0.5,
            borderBottomColor: theme.borderColor,
            borderBottomWidth: 0.5,
        },
        newIcon: {
            height: 10,
            width: 10,
            backgroundColor: theme.tabActive,
            borderRadius: 10,
            marginRight: 10,
        },
        typeContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        image: {
            height: 40,
            width: 40,
            borderRadius: 8,
            backgroundColor: theme.backgroundType,
            marginRight: 15,
            justifyContent: 'center',
            alignItems: 'center'
        },
        imageIcon: {
            tintColor: theme.text_white,
            height: 22,
            width: 22,
            resizeMode: 'contain',
        },
        title: {
            color: theme.text_1,
            fontSize: 16,
            fontWeight: '600',
        },
        money: {
            fontSize: 15
        },
        content: {
            color: theme.text_3,
            fontSize: 12,
            marginTop: 3,
            fontWeight: '500',
        },
        note: {
            maxWidth: SCREEN_WIDTH * 0.45,
        },
        alignRight: {
            textAlign: 'right',
        }
    })
    return st
}

export default styles
