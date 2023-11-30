import { StyleSheet } from 'react-native'
import useTheme from '../../hooks/useTheme'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../utils/Dimension'

const styles = () => {
    const theme = useTheme();
    const st = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
        },
        timeContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
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
        titleContainer: {
            paddingHorizontal: 35,
            marginBottom: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        title: {
            color: theme.text_1,
            fontSize: 16,
            fontWeight: '600'
        },
        titleIcon: {
            height: 20,
            width: 20,
            resizeMode: 'contain',
            tintColor: theme.text_1,
            marginRight: 10
        },
        boxContainer: {
            backgroundColor: theme.backgroundColor,
            alignSelf: 'center',
            width: SCREEN_WIDTH - 50,
            marginBottom: 20,
            borderRadius: 10,
            borderColor: theme.tabActive,
            borderWidth:1,
            paddingHorizontal: 15,
            flexDirection: 'row',
            minHeight: 50,
            alignItems:'center'
        },
        boxIcon: {
            height: 20,
            width: 20,
            resizeMode: 'contain',
            tintColor: theme.tabActive,
            marginRight: 10,
        },
        inputLabel: {
            fontSize: 12,
            color: theme.text_3,
        },
        input: {
            fontSize: 15,
            paddingRight: 40,
            verticalAlign: 'top',
            color: theme.text_1,
        },
        buttonContainer:{
            marginHorizontal: 25,
        },
        button: {
            textAlign: 'center',
            borderRadius: 10,
            paddingVertical: 20,
            marginBottom: 20,
            shadowColor: theme.shadowColor,
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
            color: theme.text_1,
        },
    
        buttonSave: {
            backgroundColor: theme.tabActive,
        },
        buttonText: {
            fontSize: 16,
            fontWeight: '600',
            textAlign: 'center',
        },
        buttonEdit: {
            backgroundColor: theme.tabActive,
        },
        buttonDel: {
            backgroundColor: theme.backgroundColor,
        },
        buttonEditText:{
            color: theme.text_white,
        },
        buttonDelText:{
            color: theme.text_err,
        },
        mgBottom20: {
            marginBottom: 20,
        },
        bg: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: SCREEN_HEIGHT,
            // borderBottomLeftRadius: 20,
            // borderBottomRightRadius: 20,
            zIndex: -10,
            opacity: 0.9,
            backgroundColor: theme.backgroundImg
        },
    })
    return st
}
export default styles