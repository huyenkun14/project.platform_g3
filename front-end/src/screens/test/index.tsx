import { View, Text, Button } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { add, sub } from '../../redux/slices/counterSlice';

const Home = () => {
  const counterRdx = useAppSelector((state: any) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <View style={styles.container}>
      <Button
        title='-'
        onPress={() => dispatch(sub())}
      />
      <Text style={styles.num}>{counterRdx}</Text>
      <Button
        title='+'
        onPress={() => dispatch(add())}
      />
    </View>
  )
}

export default Home