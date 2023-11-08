import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../../utils/Dimension'
import useTheme from '../../../../hooks/useTheme'

const styles = () => {
    const theme = useTheme()

    const st = StyleSheet.create({
    container: {
        minHeight: SCREEN_HEIGHT,
        backgroundColor: theme.backgroundColor,
        justifyContent: 'center',
        paddingHorizontal: 25,
    },
    logo: {
        height: 50,
        resizeMode: 'stretch',
        alignSelf: 'center',
    },
    title: {
        color: theme.titleColor,
        fontSize: 40,
        fontWeight: '800',
        marginBottom: 3,
        textAlign: 'center',
    },
    inputLabel: {
        marginBottom: 8,
        fontWeight: '500',
        color: theme.text_1,
    },
    input: {
        padding: 8,
        borderColor: theme.borderColor,
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 16,
    }, 
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-evenly',
        marginTop: 16,
    }, 
    button: {
        height: 40,
        borderRadius: 8,
        width: SCREEN_WIDTH/3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.tabActive
    },
    buttonText: {
        fontWeight: '500',
        color: theme.text_white,
    },
})
    return st;
}

export default styles