import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../utils/Dimension'
import useTheme from '../../hooks/useTheme'

const styles = () => {
  const theme = useTheme();
  const st = StyleSheet.create({
 modalContainer: {
    flex: 1,
    backgroundColor: theme.backgroundImg,
    position: 'relative',
    minHeight: SCREEN_HEIGHT
  },
  logo: {
    alignSelf: 'center',
    height: 60,
    resizeMode: 'contain',
  },
  header: {
    color: theme.titleColor,
    fontSize: 25,
    fontWeight: '800',
    textAlign: 'center',
  },
  title: {
    color: theme.text_3,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  inputLabel: {
    fontSize: 15,
    marginBottom: 12,
    fontWeight: '500',
    color: theme.text_1,
    marginLeft: 10
  },
  input: {
    color: theme.text_1,
    fontSize: 13.5,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 50,
    overflow: 'hidden',
    backgroundColor: theme.backgroundColor,
    borderColor: theme.flatListItem,
    borderWidth: 1,
    marginHorizontal: 25
  },
  inputLabelContainer: {
    flexDirection: 'row',
    marginHorizontal: 25,
  },
  inputLabelIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: theme.text_1,
  },
  inputNote: {
    height: 100,
    textAlignVertical: 'top',
    paddingVertical: 10,
  },
  dropdownContainer: {
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdownView: {
    width: SCREEN_WIDTH * 0.5,
  },
  dropdown: {
    borderColor: theme.backgroundImg,
    borderWidth: 1,
    borderRadius: 10,
  },
  newClassify: {
    height: 50,
    width: SCREEN_WIDTH * 0.3,
    backgroundColor: theme.flatListItem,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newClassifyIcon: {
    height: 30,
    width: 20,
    resizeMode: 'contain',
    tintColor: theme.backgroundColor
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
  },
  moneyText: {
    position: 'absolute',
    right: 40,
    top: 15,
    fontSize: 14,
    fontWeight: '400',
    color: theme.text_3,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  image: {
    // width: SCREEN_WIDTH - 50,
    height: 200,
    width: 200,
    resizeMode: 'contain'
  },
  button: {
    marginHorizontal: 25,
    marginTop: 10,
    fontSize: 16,
    paddingVertical: 15,
    textAlign: 'center',
    borderRadius: 10,
    marginBottom: 20,
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
  buttonCancel: {
    color: theme.text_1,
    backgroundColor: theme.backgroundColor,
  },
  buttonAdd: {
    color: theme.text_white,
    opacity: 0.9,
    backgroundColor: theme.tabActive,
  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: 'contain',
    zIndex: -10,
    opacity: 0.3,
  },
  shadow: {
    marginBottom: 20,
    // borderRadius: 10,
    // borderColor: theme.borderColor,
    // borderWidth: 1.5,
    // backgroundColor: theme.backgroundColor,
    // shadowColor: theme.shadowColor,
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
