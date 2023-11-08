import { View, Text, StatusBar, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import { useDispatch } from 'react-redux'
import { getAllWarningAction } from '../../services/notification/actions'
import st from './styles'

const Notification = () => {
    const dispatch = useDispatch<any>()
    const styles = st();
    const [listWarning, setListWarning] = useState([])
    useEffect(() => {
        getListWarning()
    }, [])
    const getListWarning = () => {
        dispatch(getAllWarningAction())
            .then(res => {
                console.log(res, 'list warninggggggggg')
                setListWarning(res?.payload)
            })
            .catch(err => console.log(err))
    }
    return (
        <View>
            <StatusBar />
            <Header title='Nhắc nhở' isBack={true} />
            <FlatList
                contentContainerStyle={{marginHorizontal: 25}}
                data={listWarning}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image
                            style={styles.icon}
                            source={require('../../../assets/images/icon/ic_bell.png')}
                        />
                        <Text style={styles.text}>{item?.message}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default Notification