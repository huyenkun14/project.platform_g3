import { Dimensions } from "react-native"
import { useAppSelector } from "../redux/hook"

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height

let themeMode = 'light'

let defaultColors = null
if (themeMode==='light') {
    defaultColors = {
        backgroundColor: '#fff',
        backgroundImg: '#EFF8FB',
        text_1: "#000",
        text_2: "#fff",
        text_3: '#808080',
        text_err: 'crimson',
        text_white: '#fff',
        shadowColor: '#000',
        // home
        flatListItem: '#7FC4DC',
        optionItem: '#fff',
        // entry
        backgroundType: '#E2F0F5',
        borderColor: '#E6E6E6',
        // tab
        tabColor: '#BDBDBD',
        tabActive: '#3B3DBF',
        tabAdd: '#3B3DBF',
        //auth
        titleColor: '#3B3DBF',
        solgan: '#BDBDBD',
    }
}
else if (themeMode==='dark') {
    defaultColors = {
        backgroundColor: '#000',
        backgroundImg: '#151515',
        text_1: "#fff",
        text_2: "#000",
        text_3: '#808080',
        text_err: 'crimson',
        text_white: '#fff',
        shadowColor: '#fff',
        // home
        flatListItem: '#424242',
        optionItem: '#BDBDBD',
        // entry
        backgroundType: '#585858',
        borderColor: '#E6E6E6',
        // tab
        tabColor: '#BDBDBD',
        tabActive: '#fff',
        tabAdd: '#000',
        //auth
        titleColor: '#3B3DBF',
        solgan: '#BDBDBD',
    }
}

export { defaultColors }