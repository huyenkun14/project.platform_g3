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
        backgroundColor: theme.flatListItem,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    amountIcon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        marginBottom: 15,
        tintColor: theme.text_white,
    },
    amountLabel:{
        fontSize: 12,
        color: theme.text_white,
        marginBottom: 6,
    },
    amountText: {
        fontSize: 16,
        color: theme.text_white,
    },
    modalContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 80,
        flex: 1,
    },
    modalInner: {
        paddingHorizontal: 25,
        paddingVertical: 30,
        borderRadius: 10,
        backgroundColor: theme.backgroundColor,
        width: SCREEN_WIDTH-40,
    },
    modalAvatar: {
        height: 60,
        width: 60,
        borderRadius: 10,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 16,
    },
    input: {
        height: 50,
        borderColor: theme.tabActive,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 6,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    button: {
        width: 140,
        textAlign:'center',
        paddingVertical: 14,
        backgroundColor: theme.flatListItem,
        color: theme.text_white,
        borderRadius: 8,
        overflow: 'hidden',
        fontWeight:'600',
        fontSize:16,
    }
})
    return st
}

export default styles