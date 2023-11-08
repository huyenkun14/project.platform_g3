import { StyleSheet } from 'react-native'
import useTheme from '../../hooks/useTheme'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../utils/Dimension'

const styles = () => {
    const theme = useTheme();
    const st = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.borderColor
        },
        timeContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
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
            color: theme.text_white,
        },
        titleContainer: {
            paddingHorizontal: 35,
            marginBottom: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        title: {
            color: theme.text_white,
            fontSize: 20,
            fontWeight: '600'
        },
        titleIcon: {
            height: 30,
            width: 30,
            resizeMode: 'contain',
            tintColor: theme.text_white,
        },
        boxContainer: {
            backgroundColor: theme.backgroundColor,
            alignSelf: 'center',
            width: SCREEN_WIDTH - 50,
            marginBottom: 20,
            borderRadius: 10,
            paddingHorizontal: 15,
            paddingTop: 20,
    
        },
        boxItemContainer: {
            flexDirection: 'row',
            paddingBottom: 20,
        },
        boxIcon: {
            height: 20,
            width: 20,
            resizeMode: 'contain',
            tintColor: 'green',
            marginRight: 10,
            marginTop: 10,
        },
        inputLabel: {
            fontSize: 12,
            color: theme.text_3,
            // marginBottom: -5,
        },
        input: {
            fontSize: 15,
            paddingRight: 40,
            verticalAlign: 'top',
        },
        buttonContainer:{
            marginHorizontal: 25,
            marginTop: 20,
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
            height: SCREEN_HEIGHT*0.35,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            zIndex: -10,
            opacity: 0.9,
            backgroundColor: theme.tabActive
        },
    })
    return st
}
export default styles