import { StyleSheet } from 'react-native'
import useTheme from '../../../../hooks/useTheme'

const styles = () => {
    const theme = useTheme();
const st = StyleSheet.create({
    optionContainer: {
        width: 90,
        alignItems: 'center',
        // marginBottom: 16,
    },
    optionIconContainer: {
        height: 56,
        width: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.optionItem,
        borderRadius: 8,
        shadowColor: theme.shadowColor,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    optionIcon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        tintColor: theme.flatListItem,
    },
    optionText: {
        textAlign: 'center',
        marginTop: 10,
        fontWeight: '500',
        color: theme.text_1
    }
})
return st
}

export default styles