import { StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "../../../utils/Dimension";

const styles = () => {
    const st = StyleSheet.create({
        container: {
            paddingHorizontal: 25
        },
        itemContainer: {
            flexDirection: 'row',
        },
        icon: {
            height: 25,
            width: 25,
            resizeMode: 'contain',
            marginTop: 10,
            marginRight: 25,
        },
        text: {
            width: SCREEN_WIDTH * 0.7,
            lineHeight: 20,
        }
    })
    return st
}

export default styles