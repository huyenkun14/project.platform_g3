import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SCREEN_WIDTH } from '../../../../theme'
import Swipeable from 'react-native-gesture-handler/Swipeable';

const TypeItem = (props) => {
    const { title, status, budget, current, openDetailClassify } = props
    const rangeWidth = SCREEN_WIDTH / 2
    const itemWidth = (Number(current) / Number(budget)) * rangeWidth

    return (
        <TouchableOpacity onPress={openDetailClassify}>
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
        </TouchableOpacity>
    )
}

export default TypeItem