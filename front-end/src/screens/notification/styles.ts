import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    icon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        marginTop: 10,
        marginRight: 25,
    },
    text: {
        width: 295,
        lineHeight: 20,
    }
})