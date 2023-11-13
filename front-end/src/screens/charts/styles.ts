import { StyleSheet } from 'react-native'
import useTheme from '../../hooks/useTheme'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../utils/Dimension'

const styles = () => {
    const theme = useTheme();
    const st = StyleSheet.create({
        container: {
            backgroundColor: theme.backgroundColor,
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
            color: theme.text_2,
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
            backgroundColor: theme.flatListItem,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        timeIcon: {
            height: 20,
            width: 20,
            resizeMode: 'contain',
            tintColor: theme.text_white
        },
        timeText: {
            marginLeft: 20,
            fontSize: 16,
            color: theme.text_1,
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
            borderColor: theme.borderColor,
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
            backgroundColor: theme.backgroundColor
        },
        detailButton: {
            textAlign: 'center',
            width: 100,
            color: theme.text_1,
            fontSize: 18,
            paddingVertical: 10,
            marginVertical: 10,
            alignSelf: 'center',
            textDecorationLine: 'underline'
        },
        detailText: {
            fontSize: 16,
            fontWeight: '500',
            color: theme.text_1
        },
        detailContentContainer: {
            paddingHorizontal: 15,
            marginVertical: 20,
        }
    })

    return st
}

export default styles