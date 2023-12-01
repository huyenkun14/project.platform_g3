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
            backgroundColor: theme.backgroundImg,
            flexDirection: 'row',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            width: 180,
            marginVertical: 10,
            borderRadius: 20,
            alignSelf: 'center'
        },
        addImage: {
            height: 20,
            width: 20,
            tintColor: theme.text_3,
            resizeMode: 'contain',
            marginRight: 10
        }
    })
    return st
}

export default styles