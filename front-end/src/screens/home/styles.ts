import { StyleSheet } from 'react-native'
import { SCREEN_WIDTH, defaultColors } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultColors.backgroundColor
    },
    overviewContainer: {
        marginBottom: 20,
        // minWidth: SCREEN_WIDTH
    },
    title: {
        fontWeight: '300',
        fontSize: 18,
        marginVertical: 20,
        paddingHorizontal: 25,
    },
    overviewItem: {
        height: 155,
        backgroundColor: defaultColors.flatListItem,
        minWidth: 140,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginRight: 15,
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    cardIcon: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        tintColor: defaultColors.text_white,
    },
    overviewItemTitle: {
        fontSize: 13,
        color: defaultColors.text_white,
        marginTop: 8,
    },
    overviewItemUnit: {
        fontSize: 13,
        fontWeight: '500',
        color: defaultColors.text_white,
    },
    overviewItemMoney: {
        fontSize: 16,
        fontWeight: '600',
        color: defaultColors.text_white,
        marginTop: 8,
    },
})