import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../utils/Dimension'
import useTheme from '../../hooks/useTheme'

const styles = () => {
    const theme = useTheme();
    const st = StyleSheet.create({
        container: {
            minHeight: SCREEN_HEIGHT,
            backgroundColor: theme.backgroundColor,
        },
        option: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            paddingHorizontal: 25,
        },
        optionBtn: {
            width: SCREEN_WIDTH / 2 - 25,
            paddingBottom: 16,
            borderBottomWidth: 2,
        },
        optionText: {
            textAlign: 'center',
            color: theme.text_white,
            fontWeight: '600',
            fontSize: 16,
        },
        addImageView: {
            width: 50,
            marginTop: -10,
            backgroundColor: theme.flatListItem,
            height: 50,
            justifyContent: 'center',
            borderRadius: 50,
            alignItems: 'center',
            position: 'absolute',
            right: 25,
            top: '30%'
        },
        addImage: {
            height: 20,
            width: 20,
            tintColor: theme.text_white,
            resizeMode: 'contain'
        }
    })
    return st
}

export default styles