import { StyleSheet } from "react-native";
import useTheme from "../../../../hooks/useTheme";
import { SCREEN_WIDTH } from "../../../../../utils/Dimension";
const styles = () => {
    const theme = useTheme();
const st = StyleSheet.create({
    container: {
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageIcon: {
        tintColor: theme.text_white,
        height: 22,
        width: 22,
        resizeMode: 'contain',
    },
    title: {
        color: theme.text_1,
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
return st
}
export default styles;