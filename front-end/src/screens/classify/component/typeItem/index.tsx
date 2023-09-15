import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SCREEN_WIDTH } from '../../../../theme'

const TypeItem = (props) => {
    const { title, status, budget, current } = props
    const rangeWidth = SCREEN_WIDTH / 2
    const itemWidth = (Number(current) / Number(budget)) * rangeWidth
    return (
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
                                    itemWidth/rangeWidth >= 0.8 ? styles.warning : styles.safe
                                ]} />
                            </View>
                            :
                            ''
                    }
                </View>
            </View>
        </View>
    )
}

export default TypeItem