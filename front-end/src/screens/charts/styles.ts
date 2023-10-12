import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH, defaultColors } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultColors.backgroundColor,
        minHeight: SCREEN_HEIGHT,
    },
    option: {
        width: SCREEN_WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 15,
    },
    optionTitle: {
        textAlign: 'center',
        paddingVertical: 15,
        width: SCREEN_WIDTH/3.2,
        fontSize: 16,
        borderRadius: 8,
        color: defaultColors.text_2,
        overflow: 'hidden',
    },
    ChartContainer: {
        position: 'relative'
    },
    pieChartCircle: {
        position: 'absolute',
        height: 80,
        width: 80,
        borderRadius: 100,
        backgroundColor: defaultColors.backgroundColor
    }
})