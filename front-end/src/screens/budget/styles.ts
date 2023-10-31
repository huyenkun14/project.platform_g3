import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH, defaultColors } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultColors.backgroundColor,
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
    budgetContainer: {
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
        backgroundColor: defaultColors.tabActive,
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
        tintColor: defaultColors.text_white,
    }
})