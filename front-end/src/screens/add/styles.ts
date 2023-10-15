import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH, defaultColors } from '../../theme'


export const styles = StyleSheet.create({
  container: {
    minHeight: SCREEN_HEIGHT,
    backgroundColor: defaultColors.backgroundColor,
    position: 'relative',
  },
  imageBack: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    tintColor: defaultColors.backgroundImg
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
    shadowColor: defaultColors.shadowColor,
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
    backgroundColor: defaultColors.backgroundColor,
  },
  addIncomeText: {
    color: defaultColors.text_3,
  },
  addExpense: {
    backgroundColor: defaultColors.flatListItem
  },
  addExpenseText: {
    color: defaultColors.text_2,
  },
})