import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../utils/Dimension'
import useTheme from '../../hooks/useTheme'


const styles = () => {
  const theme = useTheme();
  const st = StyleSheet.create({
    container: {
      minHeight: SCREEN_HEIGHT,
      backgroundColor: theme.backgroundColor,
      position: 'relative',
    },
    imageBack: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      tintColor: theme.backgroundImg
    },
    title: {
      fontWeight: '300',
      fontSize: 18,
      marginVertical: 20,
      paddingHorizontal: 25,
    },
    addContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginVertical: 10
    },
    addItem: {
      width: SCREEN_WIDTH/3.5,
      height: SCREEN_WIDTH/3.5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      marginBottom: 20,
      shadowColor: theme.shadowColor,
          shadowOffset: {
              width: 0,
              height: 3,
          },
          shadowOpacity: 0.1,
          shadowRadius: 4.65,
          elevation: 7,
    },
    itemIcon: {
      height: 25,
      width: 25,
      resizeMode: 'contain',
      marginBottom: 10
    },
    addIncome: {
      backgroundColor: theme.backgroundColor,
    },
    addIncomeText: {
      color: theme.text_3,
    },
    addExpense: {
      backgroundColor: theme.flatListItem
    },
    addExpenseText: {
      color: theme.text_2,
    },
  })
  return st
}
export default styles