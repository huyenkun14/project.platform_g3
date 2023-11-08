import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT } from '../../../utils/Dimension'
import useTheme from '../../hooks/useTheme'
const styles = () => {
    const theme = useTheme();

    const st = StyleSheet.create({
        container: {
            minHeight: SCREEN_HEIGHT,
            backgroundColor: theme.backgroundColor,
            position: 'relative',
        },
        logo: {
            height: 50,
            resizeMode: 'stretch',
        },
        title: {
            color: theme.titleColor,
            fontSize: 25,
            fontWeight: '800',
            marginBottom: 3,
            marginLeft: 25,
        },
        item: {
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 25,
            marginTop: 10,
            marginBottom: 10,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 8,
            backgroundColor: theme.backgroundColor,
            shadowColor: theme.shadowColor,
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.15,
            shadowRadius: 4.65,
            elevation: 7,
        },
        itemIcon: {
            height: 30,
            width: 20,
            resizeMode: 'contain',
        },
        itemText: {
            marginLeft: 15,
            fontSize: 16,
        },
        logoutText: {
            color: useTheme().text_err,
        }
    })
    return st;
}

export default styles