import { StyleSheet } from 'react-native'
import { defaultColors } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultColors.backgroundColor
    },
    overviewContainer: {
        marginBottom: 20,
    },
    title: {
        fontWeight: '600',
        fontSize: 25,
        marginVertical: 15,
        paddingHorizontal: 25,
    },
    overviewList:{
        marginLeft: 25,
    },
    overviewItem: {
        height: 200,
        backgroundColor: defaultColors.flatListItem,
        width: 150,
        paddingHorizontal: 20,
        paddingVertical: 25,
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
        fontSize: 16,
        color: defaultColors.text_white,
        marginTop: 8,
    },
    overviewItemUnit: {
        fontSize: 16,
        fontWeight: '500',
        color: defaultColors.text_white,
    },
    overviewItemMoney: {
        fontSize: 20,
        fontWeight: '600',
        color: defaultColors.text_white,
        marginTop: 8,
    },
})