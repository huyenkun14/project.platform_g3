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
        width: (SCREEN_WIDTH - 30) / 3.3,
        fontSize: 16,
        borderRadius: 8,
        color: defaultColors.text_2,
        overflow: 'hidden',
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    timeIconView: {
        height: 40,
        width: 40,
        backgroundColor: defaultColors.flatListItem,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        tintColor: defaultColors.text_white
    },
    timeText: {
        marginLeft: 20,
        fontSize: 16,
        color: defaultColors.text_1,
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
    ChartTable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginHorizontal: 15,
        borderColor: defaultColors.borderColor,
        borderBottomWidth: 1,
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
        color: defaultColors.text_1,
        fontSize: 18,
        paddingVertical: 10,
        marginVertical: 10,
        alignSelf: 'center',
        textDecorationLine: 'underline'
    },
    detailContentContainer: {
        paddingHorizontal: 15,
        marginVertical: 20,
    }
})