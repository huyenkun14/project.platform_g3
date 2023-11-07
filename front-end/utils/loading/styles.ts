import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../Dimension";
import { defaultColors } from "../../src/theme";

const styles = StyleSheet.create({
    container: { width: SCREEN_WIDTH, height: SCREEN_HEIGHT, position: "absolute", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.6)" },
    mainBlock: { width: 230, height: 130, backgroundColor: defaultColors.WHITE, borderRadius: 8, alignItems: "center", justifyContent: 'center' },
    img: { resizeMode: 'contain', height: 60 },
    flr: { flexDirection: "row", alignItems: 'center' },
    mgr: { marginRight: 8, fontSize: 14, fontWeight: '500', color: defaultColors.titleColor }
})

export default styles