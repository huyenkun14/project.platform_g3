import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SCREEN_WIDTH } from '../../../../theme'
import Swipeable from 'react-native-gesture-handler/Swipeable';

const TypeItem = (props) => {
    const { title, status, budget, current } = props
    const rangeWidth = SCREEN_WIDTH / 2
    const itemWidth = (Number(current) / Number(budget)) * rangeWidth
    const swipeFromRightOpen = () => {
        console.log('open')
    }
    const rightSwipeActions = () => {
        return (
            <View style={styles.swipeContainer}>
                <TouchableOpacity style={styles.swipeIconWrap}>
                    <Image
                        style={styles.swipeIcon}
                        source={require('../../../../../assets/images/icon/ic_edit.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.swipeIconWrap}>
                    <Image
                        style={styles.swipeIcon}
                        source={require('../../../../../assets/images/icon/ic_delete.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <Swipeable
            renderRightActions={rightSwipeActions}
            onSwipeableRightOpen={swipeFromRightOpen}
        >
            <View style={styles.container}>
                <View style={styles.typeContainer}>
                    <View style={styles.image} />
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        {
                            status == 'chi tiêu'
                                ?
                                <View style={styles.range}>
                                    <View style={[
                                        styles.current,
                                        { width: itemWidth },
                                        itemWidth / rangeWidth >= 0.8 ? styles.warning : styles.safe
                                    ]} />
                                </View>
                                :
                                ''
                        }
                    </View>
                </View>
            </View>
        </Swipeable>
    )
}

export default TypeItem