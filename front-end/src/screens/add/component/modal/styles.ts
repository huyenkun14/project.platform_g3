import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH, defaultColors } from '../../../../theme'

export const styles = StyleSheet.create({

  modalContainer: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: defaultColors.backgroundColor,
    justifyContent: 'center',
  },
  title: {
    color: defaultColors.titleColor,
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '500',
    color: defaultColors.text_3,
  },
  input: {
    color: defaultColors.text_1,
    fontSize: 14,
    paddingHorizontal: 15,
    borderRadius: 5,
    height: 50,
    overflow: 'hidden',
    backgroundColor: defaultColors.backgroundColor,
  },
  inputNote: {
    height: 100,
    textAlignVertical: 'top',
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dropdown: {
    borderColor: defaultColors.backgroundColor,
    width: SCREEN_WIDTH * 0.6,
    borderRadius: 5,
  },
  newClassify: {
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: defaultColors.flatListItem,
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center',
  },
  newClassifyIcon: {
    height: 30,
    width: 20,
    resizeMode: 'contain',
    tintColor: defaultColors.backgroundColor
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    fontSize: 16,
    width: SCREEN_WIDTH / 2.65,
    paddingVertical: 15,
    textAlign: 'center',
    borderRadius: 5,
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
    borderRadius: 5,
    borderColor: defaultColors.borderColor,
    borderWidth: 1.5,
    backgroundColor: defaultColors.backgroundColor,
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