import { StyleSheet } from 'react-native'
import { SCREEN_WIDTH, defaultColors } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: defaultColors.backgroundColor
    },
    calendarContainer: {
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    calendar: {
        width: SCREEN_WIDTH - 50,
        borderRadius: 8,
        paddingBottom: 10,
        shadowColor: defaultColors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    contentRow: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        justifyContent: 'space-between',
    },
    contentCol: {
        paddingHorizontal: 25,
    },
    inputLabel: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        backgroundColor: defaultColors.backgroundColor,
        paddingHorizontal: 10,
        height: 50,
        fontSize: 16,
        borderRadius: 8,
        shadowColor: defaultColors.shadowColor,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        color: defaultColors.text_1,
    },
    inputTitle: {
        width: SCREEN_WIDTH/2
    },
    inputType: {
        width: SCREEN_WIDTH/3
    },
    inputNote: {
        height: 150,
        textAlignVertical: 'top',
        paddingVertical: 10,
    },
    mgBottom20: {
        marginBottom: 20,
    },
})