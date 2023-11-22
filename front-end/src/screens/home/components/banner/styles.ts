/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
import useTheme from '../../../../hooks/useTheme';

const styles = () => {
    const theme = useTheme();
    const SLIDER_WIDTH = Dimensions.get('window').width
const SLIDER_HEIGHT = SLIDER_WIDTH * 0.45
const ITEM_WIDTH = SLIDER_WIDTH - 10
const ITEM_HEIGHT = SLIDER_WIDTH * 0.45

const st = StyleSheet.create({
    container: {
        backgroundColor: theme.backgroundType,
        borderRadius: 8,
        marginTop: -20,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        shadowColor: theme.shadowColor,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    image: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        borderRadius: 8,
        resizeMode: 'cover',
    },
})
    return {st, SLIDER_HEIGHT, SLIDER_WIDTH}
}

export default styles;


