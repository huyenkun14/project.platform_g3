import { Dimensions } from "react-native"
import { useAppSelector } from "../redux/hook"
import lightColors from "./lightMode"
import darkColors from "./darkMode"

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height

let themeMode = 'light'

let defaultColors = themeMode === 'light' ? lightColors : darkColors;

export { defaultColors }