import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, defaultColors } from "../../../../theme";

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
        color: defaultColors.text_black,
        fontSize: 16,
        fontWeight: '600',
    },
    range: {
        width: SCREEN_WIDTH/2,
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
})