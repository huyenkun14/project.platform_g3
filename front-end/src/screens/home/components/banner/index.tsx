/* eslint-disable prettier/prettier */
/* eslint-disable unused-imports/no-unused-imports */
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { View, Image, Text } from 'react-native';
import { SLIDER_HEIGHT, SLIDER_WIDTH, styles } from './styles';
import { defaultColors } from '../../../../theme';

const Banner = () => {

  const dataBanner = [
    {
      id: 1,
      imgURL: require('../../../../../assets/images/banner/banner1.png')
    },
    {
      id: 2,
      imgURL: require('../../../../../assets/images/banner/banner2.png')
    },
    {
      id: 3,
      imgURL: require('../../../../../assets/images/banner/banner3.png')
    },
    {
      id: 4,
      imgURL: require('../../../../../assets/images/banner/banner4.png')
    }
  ]

  const CarouselCardItem = ({ item, index }) => {
    return (
      <View style={styles.container} key={index}>
        <Image
          source={item.imgURL}
          style={styles.image}
        />
      </View>
    )
  }

  return (
    <View>
      <Carousel
        loop
        defaultIndex={1}
        autoPlay
        mode='parallax'
        scrollAnimationDuration={1400}
        data={dataBanner}
        renderItem={CarouselCardItem}
        width={SLIDER_WIDTH}
        height={SLIDER_HEIGHT}
      />
    </View>
  )
}

export default Banner
