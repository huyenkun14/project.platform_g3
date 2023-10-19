import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH, defaultColors } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultColors.backgroundColor,
        minHeight: SCREEN_HEIGHT,
    },
    option: {
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    optionTitle: {
        textAlign: 'center',
        paddingVertical: 10,
        width: (SCREEN_WIDTH-30)/3.3,
        fontSize: 16,
        borderRadius: 8,
        color: defaultColors.text_2,
        overflow: 'hidden',
    },
    lineChartContainer: {

    },
    lineChartNoteContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        marginVertical: 20,
    },
    lineChartNoteItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    lineChartNoteIcon: {
        width: 30,
        height: 2,
        marginRight: 10,
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
    },
    detailButton: {
        textAlign: 'center',
        width: 100,
        color: '#fff',
        paddingVertical: 10,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: defaultColors.tabActive,
    },
    detailContentContainer: {
        paddingHorizontal: 15,
        marginVertical: 20,
    }
})