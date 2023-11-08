
import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../../utils/Dimension";
import useTheme from "../../hooks/useTheme";

const styles = () => {
    const theme = useTheme();
    const st = StyleSheet.create({
        container: {
            backgroundColor: theme.backgroundColor,
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
        budgetContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 25,
            paddingVertical: 15,
            borderRadius: 8,
            borderTopColor: theme.borderColor,
            borderTopWidth: 0.5,
            borderBottomColor: theme.borderColor,
            borderBottomWidth: 0.5,
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
        },
        title: {
            color: theme.text_black,
            fontSize: 16,
            fontWeight: '600',
        },
        range: {
            width: SCREEN_WIDTH / 2,
            backgroundColor: '#f2f2f2',
            height: 4,
            marginTop: 10,
            borderRadius: 100,
            position: 'relative',
        },
        current: {
            position: 'absolute',
            height: 4,
            borderRadius: 100,
        },
        safe: {
            backgroundColor: '#86E3CE',
        },
        warning: {
            backgroundColor: '#FFDCA2',
        },
        addImageContainer: {
            height: 50,
            width: 50,
            borderRadius: 100,
            backgroundColor: theme.tabActive,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 20,
            alignSelf: 'center',
        },
        addImage: {
            height: 25,
            width: 25,
            resizeMode: 'contain',
            tintColor: theme.text_white,
        }
    })
    return st
}

export default styles