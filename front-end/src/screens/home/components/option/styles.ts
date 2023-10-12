import { StyleSheet } from 'react-native'
import { defaultColors } from '../../../../theme'

export const styles = StyleSheet.create({
    optionContainer: {
        width: 90,
        alignItems: 'center',
        marginBottom: 20,
    },
    optionIconContainer: {
        height: 56,
        width: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: defaultColors.optionItem,
        borderRadius: 8,
        shadowColor: defaultColors.shadowColor,
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
        tintColor: defaultColors.flatListItem,
    },
    optionText: {
        textAlign: 'center',
        marginTop: 10,
        fontWeight: '500',
        color: defaultColors.text_1
    }
})