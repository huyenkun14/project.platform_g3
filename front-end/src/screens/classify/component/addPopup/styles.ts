import { StyleSheet } from "react-native";
import useTheme from "../../../../hooks/useTheme";

const styles = () => {
    const theme = useTheme();
    const st = StyleSheet.create({
        modalContainer: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
        },
        modalInner: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: theme.backgroundColor,
            // paddingHorizontal: 40,
            // paddingVertical: 40,
            padding: 16,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        },
        headerContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        title: {
            color: theme.titleColor,
            fontSize: 20,
            fontWeight: '800',
            textAlign: 'center',
        },
        closeIcon: {
            height: 18,
            width: 18,
            resizeMode: 'contain',
        },
        empty: {
            height: 18,
            width: 18,
        },
        inputLabel: {
            fontSize: 15,
            marginTop: 20,
            marginBottom: 10,
            fontWeight: '500',
            color: theme.BLACK,
        },
        input: {
            color: theme.text_1,
            fontSize: 14,
            paddingHorizontal: 15,
            borderRadius: 5,
            height: 50,
            overflow: 'hidden',
            backgroundColor: theme.backgroundColor,
        },
        checkboxContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
            // paddingHorizontal: 30
        },
        checkboxView:{
            flexDirection: 'row',
            alignItems: 'center',
        },
        checkbox: {
            marginRight: 8,
        },
        addImage: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            marginBottom: 30,
            height: 150,
            borderColor: theme.borderColor,
            borderWidth: 2,
            borderStyle: 'dotted',
        },
        addImageIcon: {
            height: 25,
            width: 25,
            resizeMode: 'contain',
        },
        addImageText: {
            marginLeft: 10,
        },
        button: {
            backgroundColor: theme.tabActive,
            // paddingVertical: 15,
            height: 40,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
    
        },
        buttonText: {
            textAlign: 'center',
            fontSize: 14,
            fontWeight: "500",
            color: theme.text_white,
    
        },
        shadow: {
            borderRadius: 5,
            borderColor: theme.borderColor,
            borderWidth: 1.5,
            backgroundColor: theme.backgroundColor,
            // shadowColor: useTheme().shadowColor,
            // shadowOffset: {
            //   width: 0,
            //   height: 3,
            // },
            // shadowOpacity: 0.15,
            // shadowRadius: 4.65,
            // elevation: 7,
        },
    })
    return st
}
export default styles