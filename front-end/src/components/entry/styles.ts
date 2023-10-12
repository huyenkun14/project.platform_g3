import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, defaultColors } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 8,
        borderTopColor: defaultColors.borderColor,
        borderTopWidth: 0.5,
        borderBottomColor: defaultColors.borderColor,
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
        backgroundColor: defaultColors.backgroundType,
        marginRight: 15,
    },
    title: {
        color: defaultColors.text_1,
        fontSize: 16,
        fontWeight: '600',
    },
    money: {
        fontSize: 15
    },
    content: {
        color: defaultColors.text_3,
        fontSize: 12,
        marginTop: 3,
        fontWeight: '500',
    },
    note: {
        maxWidth: SCREEN_WIDTH*0.45,
    },
    alignRight: {
        textAlign: 'right',
    }
})