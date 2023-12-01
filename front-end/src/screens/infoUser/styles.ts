import { StyleSheet } from "react-native";
import useTheme from "../../hooks/useTheme";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../utils/Dimension";

const styles = () => {
    const theme = useTheme();
    const st = StyleSheet.create({
        container: {
            backgroundColor: theme.backgroundImg,
            minHeight: SCREEN_HEIGHT,
        },
        headerContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 30,
            paddingHorizontal: 25,
        },
        headerIcon: {
            height: 20,
            width: 20,
            resizeMode: 'contain'
        },
        modalAvatar: {
            height: 100,
            width: 100,
            borderRadius: 20,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginBottom: 16,
        },
        inputLabel: {
            fontSize: 15,
            fontWeight: '500',
            color: theme.text_1,
            marginLeft: 25
        },
        input: {
            height: 50,
            borderColor: theme.backgroundType,
            backgroundColor: theme.backgroundColor,
            borderRadius: 10,
            borderWidth: 1,
            marginTop: 6,
            marginBottom: 10,
            paddingHorizontal: 10,
            marginHorizontal: 25,
        },
        button: {
            marginTop: 8,
            textAlign: 'center',
            paddingVertical: 14,
            backgroundColor: theme.tabActive,
            color: theme.text_white,
            borderRadius: 8,
            overflow: 'hidden',
            fontWeight: '600',
            fontSize: 16,
            marginHorizontal: 25,
        }
    })
    return st
}

export default styles