import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH, defaultColors } from '../../../../theme'

export const styles = StyleSheet.create({

  modalContainer: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: defaultColors.borderColor,
    paddingVertical: 20,
    position: 'relative',
  },
  logo: {
    height: 120,
    alignSelf: 'center',
    width: SCREEN_WIDTH,
    resizeMode: 'contain',
  },
  header: {
    color: defaultColors.titleColor,
    fontSize: 25,
    fontWeight: '800',
    textAlign: 'center',
  },
  title: {
    color: defaultColors.text_3,
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
    color: defaultColors.text_3,
    marginLeft: 10
  },
  input: {
    color: defaultColors.text_1,
    fontSize: 13.5,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 50,
    overflow: 'hidden',
    backgroundColor: defaultColors.backgroundColor,
  },
  inputLabelContainer: {
    flexDirection: 'row',
  },
  inputLabelIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: defaultColors.text_3,
  },
  inputNote: {
    height: 100,
    textAlignVertical: 'top',
    paddingVertical: 10,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdownView: {
    width: SCREEN_WIDTH * 0.5,
  },
  dropdown: {
    borderColor: defaultColors.backgroundColor,
    borderRadius: 10,
  },
  newClassify: {
    height: 50,
    width: SCREEN_WIDTH * 0.3,
    backgroundColor: defaultColors.flatListItem,
    borderRadius: 10,
    alignItems:'center',
    justifyContent:'center',
  },
  newClassifyIcon: {
    height: 30,
    width: 20,
    resizeMode: 'contain',
    tintColor: defaultColors.backgroundColor
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeIconView: {
    height: 40,
    width: 40,
    backgroundColor: defaultColors.flatListItem,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: defaultColors.text_white
  },
  timeText: {
    marginLeft: 20,
    fontSize: 16,
  },
  moneyText: {
    position: 'absolute',
    right: 20,
    top: 15,
    fontSize: 14,
    fontWeight: '400',
    color: defaultColors.text_3,
  },
  button: {
    marginTop: 10,
    fontSize: 16,
    paddingVertical: 15,
    textAlign: 'center',
    borderRadius: 10,
    marginBottom: 20,
    borderColor: defaultColors.borderColor,
    borderWidth: 0.5,
    shadowColor: defaultColors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 3,
  },
  buttonCancel: {
    color: defaultColors.text_1,
    backgroundColor: defaultColors.backgroundColor,
  },
  buttonAdd: {
    color: defaultColors.text_white,
    opacity: 0.9,
    backgroundColor: defaultColors.tabActive,
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
    // borderColor: defaultColors.borderColor,
    // borderWidth: 1.5,
    // backgroundColor: defaultColors.backgroundColor,
    // shadowColor: defaultColors.shadowColor,
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.15,
    // shadowRadius: 4.65,
    // elevation: 7,
  },
})