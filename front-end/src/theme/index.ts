import { Dimensions } from "react-native"

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height

export const defaultColors = {
    backgroundColor: '#fff',
    backgroundImg: '#EFF8FB',
    text_black: "#000",
    text_white: "#fff",
    text_gray: '#808080',

    // home
    flatListItem: '#7FC4DC',

    // entry
    backgroundType: '#E2F0F5',
    borderColor: '#E6E6E6',
    // tab
    tabColor: '#BDBDBD',
    tabActive: '#3B3DBF'
}