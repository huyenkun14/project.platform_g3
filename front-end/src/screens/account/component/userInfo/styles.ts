import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH, defaultColors } from '../../../../theme'


export const styles = StyleSheet.create({
    container: {
        minHeight: SCREEN_HEIGHT,
        backgroundColor: defaultColors.backgroundColor,
        position: 'relative',
    },
    imageContainer: {
        height: 80,
        width: 80,
        backgroundColor: defaultColors.flatListItem,
        borderRadius: 20,
        alignSelf: 'center',
        marginVertical: 20,
    },
    imageEdit: {
        width: 100,
        textAlign: 'center',
        alignSelf: 'center',
        paddingVertical: 10,
        color: defaultColors.text_white,
        backgroundColor: defaultColors.flatListItem,
        marginBottom: 20,
        borderRadius: 10,
    },
    cancel: {
        width: 100,
        textAlign: 'center',
        alignSelf: 'center',
        paddingVertical: 10,
        color: defaultColors.text_white,
        backgroundColor: defaultColors.flatListItem,
        marginBottom: 20,
        borderRadius: 10,
    }
})