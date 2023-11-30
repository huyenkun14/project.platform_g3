import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../../utils/Dimension'
import useTheme from '../../../../hooks/useTheme'

const styles = () => {
    const theme = useTheme()

    const st = StyleSheet.create({
    container: {
        minHeight: SCREEN_HEIGHT,
        backgroundColor: theme.backgroundImg,
        paddingTop:30,
        paddingHorizontal: 25,
    },
    logo: {
        height: 60,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom:10,
    },
    title: {
        color: theme.titleColor,
        fontSize: 40,
        fontWeight: '800',
        marginBottom: 3,
        textAlign: 'center',
    },
    inputLabel: {
        marginBottom: 6,
        fontWeight: '500',
        color: theme.text_1,
    },
    input: {
        backgroundColor:theme.backgroundColor,
        paddingHorizontal:10,
        height:50,
        borderColor: theme.tabActive,
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 10,
    }, 
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginTop: 16,
    }, 
    button: {
        height: 50,
        borderRadius: 8,
        width: SCREEN_WIDTH/2.5,
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