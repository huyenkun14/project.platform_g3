import { StyleSheet } from 'react-native'
import useTheme from '../../hooks/useTheme'

const styles = () => {
    const theme = useTheme();
    const st = StyleSheet.create({
        container: {
            backgroundColor: theme.backgroundColor
        },
        imageBack: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            tintColor: theme.backgroundImg
        },
        overviewContainer: {
            marginBottom: 20,
            marginTop: 10
        },
        title: {
            fontWeight: '300',
            fontSize: 16,
            marginBottom: 20,
            paddingHorizontal: 25,
            color: theme.text_1,
        },
        overviewItem: {
            height: 155,
            backgroundColor: theme.flatListItem,
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
            tintColor: theme.text_white,
        },
        overviewItemTitle: {
            fontSize: 13,
            color: theme.text_white,
            marginTop: 8,
        },
        overviewItemUnit: {
            fontSize: 13,
            fontWeight: '500',
            color: theme.text_white,
        },
        overviewItemMoney: {
            fontSize: 16,
            fontWeight: '600',
            color: theme.text_white,
            marginTop: 8,
        },
        optionContainer: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
        },
        emptyOption: {
            backfaceVisibility: 'hidden',
            width: 90,
        }
    })
    return st
}

export default styles