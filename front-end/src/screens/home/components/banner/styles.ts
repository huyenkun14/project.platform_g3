/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
import { defaultColors } from '../../../../theme';

export const SLIDER_WIDTH = Dimensions.get('window').width
export const SLIDER_HEIGHT = SLIDER_WIDTH * 0.52
export const ITEM_WIDTH = SLIDER_WIDTH - 10
export const ITEM_HEIGHT = SLIDER_WIDTH * 0.5

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'none',
        borderRadius: 8,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        shadowColor: "#000",
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


