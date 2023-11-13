import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT } from '../../../utils/Dimension'
import useTheme from '../../hooks/useTheme'

const styles = () => {
    const theme = useTheme();
    const st = StyleSheet.create({
        container: {
            backgroundColor: theme.backgroundColor,
            paddingBottom: 80,
            minHeight: SCREEN_HEIGHT,
        },
        timeContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
        },
        timeIconView: {
            height: 40,
            width: 40,
            backgroundColor: theme.flatListItem,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        timeIcon: {
            height: 20,
            width: 20,
            resizeMode: 'contain',
            tintColor: theme.text_white
        },
        timeText: {
            marginLeft: 20,
            fontSize: 16,
            color: theme.text_1,
        },
    })
    return st
}

export default styles