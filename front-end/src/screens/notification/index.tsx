import { View, Text, StatusBar, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import { useDispatch } from 'react-redux'
import { getAllWarningAction } from '../../services/notification/actions'
import st from './styles'
import useTheme from '../../hooks/useTheme'
import Loading from '../../../utils/loading/Loading'

const Notification = () => {
    const theme = useTheme()
    const dispatch = useDispatch<any>()
    const styles = st();
    const [listWarning, setListWarning] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        getListWarning()
    }, [])
    const getListWarning = () => {
        setLoading(true)
        dispatch(getAllWarningAction())
            .then(res => {
                setLoading(false)
                setListWarning(res?.payload)
            })
            .catch(err => setLoading(false))
    }
    return (
        <View>
            <StatusBar />
            <Header title='Nhắc nhở' isBack={true} />
            {listWarning?.length > 0 ? <FlatList
                contentContainerStyle={{ marginHorizontal: 25 }}
                ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: theme.backgroundType, marginVertical: 10 }} />}
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
            /> : <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 20 }}>Không có nhắc nhở nào.</Text>}
            <Loading visiable={loading} />
        </View>
    )
}

export default Notification