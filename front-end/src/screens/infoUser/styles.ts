import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH, defaultColors } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultColors.backgroundColor,
        minHeight: SCREEN_HEIGHT,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 25,
        // position: 'absolute',
        // top: 10,
        // zIndex: 100,
        // width: SCREEN_WIDTH,
    },
    headerIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    avatarContainer: {
        // marginBottom: 30,
    },
    avatar: {
        height: 120,
        width: 120,
        borderRadius:30,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    usernameText: {
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        marginVertical: 20,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    infoIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginRight: 10,
    },
    infoText: {
        fontSize: 16,
        fontWeight: '400'
    },
    amountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20
    },
    amountItem: {
        minWidth: SCREEN_WIDTH/3,
        backgroundColor: defaultColors.flatListItem,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    amountIcon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        marginBottom: 15,
        tintColor: defaultColors.text_white,
    },
    amountLabel:{
        fontSize: 12,
        color: defaultColors.text_white,
        marginBottom: 6,
    },
    amountText: {
        fontSize: 16,
        color: defaultColors.text_white,
    }
})