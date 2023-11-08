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
            alignItems:'center',
            paddingHorizontal: 25,
        },
        optionBtn: {
            width: 100,
            // backgroundColor: theme.flatListItem,
            borderRadius: 8,
            marginTop: 10,
            marginBottom: 20,
            paddingVertical: 10,
            // shadowColor: theme.shadowColor,
            // shadowOffset: {
            //     width: 0,
            //     height: 3,
            // },
            // shadowOpacity: 0.29,
            // shadowRadius: 4.65,
            // elevation: 7,
        },
        optionText: {
            textAlign: 'center',
            color: theme.text_white,
            fontWeight: '500',
            fontSize: 14,
        },
        searchContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 25,
        },
        searchView: {
            height: 50,
            width: SCREEN_WIDTH*0.6,
            justifyContent: 'center',
            borderRadius: 10,
            borderColor: theme.borderColor,
            borderWidth: 1,
            paddingHorizontal: 10,
        },
        searchInput: {
    
        },
        searchImageView: {
            width: 50,
            marginTop: -10,
            backgroundColor: theme.flatListItem,
            height: 40,
            justifyContent: 'center',
            borderRadius: 10,
            alignItems: 'center',
        },
        searchImage:{
            height: 25,
            width: 25,
            tintColor: theme.text_white,
            resizeMode: 'contain'
        }
    })
    return st
}

export default styles