import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../Dimension";
import useTheme from "../../src/hooks/useTheme";

const styles = () => {
    const theme = useTheme();
    const st = StyleSheet.create({
        container: {width: SCREEN_WIDTH, height: SCREEN_HEIGHT, position: "absolute", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.6)"},
        mainBlock: { width: 230, height: 130, backgroundColor: theme.WHITE, borderRadius: 8, alignItems: "center", justifyContent: 'center'},
        img: {width: 70, height: 70},
        flr: {flexDirection: "row", alignItems: 'center'},
        mgr: {marginRight: 8, fontSize: 14, fontWeight: '500', color: theme.titleColor}
    })
    
    return st
}

export default styles