import { StyleSheet } from "react-native";
import useTheme from "../../../../hooks/useTheme";

const styles = () => {
    const theme = useTheme();
const st = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalInner: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: theme.backgroundColor,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: theme.titleColor,
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
    },
    closeIcon: {
        height: 18,
        width: 18,
        resizeMode: 'contain',
    },
    empty: {
        height: 18,
        width: 18,
    },
    inputLabel: {
        fontSize: 15,
        marginTop: 20,
        marginBottom: 10,
        fontWeight: '500',
        color: theme.BLACK,
    },
    input: {
        color: theme.text_1,
        fontSize: 14,
        paddingHorizontal: 15,
        borderRadius: 5,
        height: 50,
        overflow: 'hidden',
        backgroundColor: theme.backgroundColor,
    },
    addImage: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        borderColor: theme.borderColor,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
    addImageIcon: {
        height: 25,
        width: 25,
        resizeMode:'contain',
    },
    addImageText: {
        marginLeft: 10,
    },
    button: {
        backgroundColor: theme.tabActive,
        paddingVertical: 15,
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 16,
        color: theme.text_white,
        marginTop: 30,

    },
    shadow: {
        borderRadius: 5,
        borderColor: theme.borderColor,
        borderWidth: 1.5,
        backgroundColor: theme.backgroundColor,
        // shadowColor: theme.shadowColor,
        // shadowOffset: {
        //   width: 0,
        //   height: 3,
        // },
        // shadowOpacity: 0.15,
        // shadowRadius: 4.65,
        // elevation: 7,
    },
})

return st
}

export default styles;