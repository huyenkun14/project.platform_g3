import { StyleSheet } from 'react-native'
import { SCREEN_WIDTH, defaultColors } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        shadowColor: "#000",
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    inputTitle: {
        width: SCREEN_WIDTH/2
    },
    inputType: {
        width: SCREEN_WIDTH/3
    },
    inputNote: {
        height: 150,
    },
    mgBottom20: {
        marginBottom: 20,
    },
})