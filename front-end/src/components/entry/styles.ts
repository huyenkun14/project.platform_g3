import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, defaultColors } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 25,
        paddingVertical: 20,
        borderRadius: 8,
        borderTopColor: '#E6E6E6',
        borderTopWidth: 1,
    },
    typeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 45,
        width: 45,
        borderRadius: 8,
        backgroundColor: defaultColors.backgroundType,
        marginRight: 15,
    },
    title: {
        color: defaultColors.text_black,
        fontSize: 18,
        fontWeight: '600',
    },
    content: {
        color: defaultColors.text_gray,
        fontSize: 14,
        marginTop: 5,
        fontWeight: '500',
    },
    note: {
        maxWidth: SCREEN_WIDTH*0.45,
    },
    alignRight: {
        textAlign: 'right',
    }
})