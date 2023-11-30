import { StyleSheet } from 'react-native'
import useTheme from '../../hooks/useTheme';
import { SCREEN_WIDTH } from '../../../utils/Dimension';

const styles = () => {
  const theme = useTheme();

  const st = StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
    },
    modalInner: {
      backgroundColor: theme.backgroundColor,
      paddingTop: 20,
      paddingBottom: 40,
      marginHorizontal: 25,
      borderRadius: 10,
      height: 520
    },
    logo: {
      alignSelf: 'center',
      height: 50,
      resizeMode: 'contain',
    },
    title: {
      color: theme.text_1,
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
      marginVertical: 20,
    },
    optionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 25,
    },
    option: {
      width: SCREEN_WIDTH / 2 - 50,
      paddingBottom: 16,
      borderBottomWidth: 2,
    },
    optionText: {
      textAlign: 'center'
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 25,
      // paddingVertical: 5,
      borderRadius: 8,
      borderTopColor: theme.borderColor,
      borderTopWidth: 0.5,
      borderBottomColor: theme.borderColor,
      borderBottomWidth: 0.5,
    },
    typeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      height: 40,
      width: 40,
      borderRadius: 8,
      backgroundColor: theme.backgroundType,
      marginRight: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageIcon: {
      tintColor: theme.text_white,
      height: 22,
      width: 22,
      resizeMode: 'contain',
    },
  })
  return st
}
export default styles