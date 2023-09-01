import { StyleSheet } from "react-native";
import { defaultColors } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 25,
        paddingVertical: 25,
        borderRadius: 8,
        borderTopColor: '#E6E6E6',
        borderTopWidth: 1,
    },
    typeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 8,
        backgroundColor: defaultColors.backgroundType,
        marginRight: 15,
    },
    title: {
        color: defaultColors.text_black,
        fontSize: 20,
        fontWeight: '600',
    },
    content: {
        color: defaultColors.text_gray,
        fontSize: 16,
        fontWeight: '500'
    },
    alignRight: {
        textAlign: 'right',
    }
})