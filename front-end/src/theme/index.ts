import { Dimensions } from "react-native"

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height

export const defaultColors = {
    backgroundColor: '#fff',
    text_black: "#000",
    text_white: "#fff",
    text_gray: '#808080',

    // home
    flatListItem: '#7FC4DC',

    // entry
    backgroundType: '#E2F0F5',

    // tab
    tabColor: '#BDBDBD',
    tabActive: '#3B3DBF'
}