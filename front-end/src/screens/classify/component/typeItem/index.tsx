import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SCREEN_WIDTH } from '../../../../theme'
import { BASE_URL } from '../../../../constants/api'

const TypeItem = (props) => {
    const { title, status, budget, current, openDetailClassify, item } = props
    const rangeWidth = SCREEN_WIDTH / 2
    const itemWidth = (Number(current) / Number(budget)) * rangeWidth

    return (
        <TouchableOpacity onPress={openDetailClassify}>
            <View style={styles.container}>
                <View style={styles.typeContainer}>
                    {/* <View style={styles.image} /> */}
                    <Image style={styles.image} resizeMode='stretch' source={{uri: item?.iconId ? `${BASE_URL}${item?.urlIcon}` : 'https://cdn-icons-png.flaticon.com/512/447/447120.png'}} />
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