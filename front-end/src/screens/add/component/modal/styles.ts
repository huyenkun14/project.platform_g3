import { StyleSheet } from 'react-native'
import useTheme from '../../../../hooks/useTheme'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../../utils/Dimension'

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
    button: {
      backgroundColor: theme.tabActive,
      marginHorizontal: 25,
      borderRadius: 10,
      marginTop: 16,
      paddingVertical:16,
      borderColor: theme.borderColor,
      borderWidth: 0.5,
      shadowColor: theme.shadowColor,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.15,
      shadowRadius: 4.65,
      elevation: 3,
    },
    buttonText: {
      fontSize: 16,
      textAlign: 'center',
      color: theme.text_white,
    }
  })
  return st
}
export default styles