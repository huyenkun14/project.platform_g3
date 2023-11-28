import { SafeAreaView, TouchableOpacity, View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import st from './styles'
import Header from '../../components/header';
import TypeItem from './component/typeItem';
import AddNewClassify from '../../components/addNewClassify';
import { getAllClassifyAction } from '../../services/classify/actions';
import { useDispatch } from 'react-redux';
import DetailClassify from './component/detailClassify';
import { getAllIcon } from '../../services/icon';
import Loading from '../../../utils/loading/Loading';
import { useIsFocused } from '@react-navigation/native';
import useTheme from '../../hooks/useTheme';

const Classify = () => {
    const isFocused = useIsFocused()
    const styles = st();
    const theme = useTheme();
    const [type, setType] = useState([])
    const [isIncome, setIsIncome] = useState(false)
    const [addNewClassifyOpen, setAddNewClassifyOpen] = useState(false)
    const [detailClassifyOpen, setDetailClassifyOpen] = useState(false)
    const [chooseItem, setChooseItem] = useState<any>()
    const dispatch = useDispatch<any>()
    const [listClassify, setListClassify] = useState([]);
    const [listIcon, setListIcon] = useState<{ id: number, url: string }[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [firstMount, setFirstMount] = useState<boolean>(true)

    const handleChooseItem = (item: any) => {
        setDetailClassifyOpen(true)
        setChooseItem(item)
    }

    const handleGetIcon = async () => {
        setLoading(true)
        const res = await getAllIcon()
        setLoading(false)
        console.log("res nè", res)
        if (res?.status === 200) {
            setListIcon(res?.data)
        }
    }

    useEffect(() => {
        if (isFocused && firstMount) {
            getListClassify()
            handleGetIcon()
            setIsIncome(false)
            setType(listClassify?.filter(item => item?.value === false))
            setFirstMount(false)
        }
    }, [isFocused])
    useEffect(() => {
        if (listClassify && listClassify.length > 0) {
            if (!isIncome) {
                setType(listClassify?.filter(item => item?.value === false))
            }
            else {
                setType(listClassify?.filter(item => item?.value === true))
            }
        }
    }, [listClassify])

    const getListClassify = () => {
        setLoading(true)
        dispatch(getAllClassifyAction())
            .then(res => {
                setLoading(false)
                setListClassify(res?.payload)
                console.log("listClassify", res?.payload)
            })
            .catch(err => {
                setLoading(false)
                console.log('err', err)
            })
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Danh mục" isBack={false} />
            <View style={styles.option}>
                <TouchableOpacity
                    style={[styles.optionBtn, { borderBottomColor: isIncome ? theme.borderColor : theme.tabActive }]}
                    onPress={() => {
                        setType(listClassify?.filter(item => item?.value === false))
                        setIsIncome(false)
                    }}>
                    <Text style={[styles.optionText, { color: isIncome ? 'grey' : theme.tabActive }]}>Chi tiêu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.optionBtn, { borderBottomColor: isIncome ? theme.tabActive : theme.borderColor }]}
                    onPress={() => {
                        setType(listClassify?.filter(item => item?.value === true))
                        setIsIncome(true)
                    }}>
                    <Text style={[styles.optionText, { color: isIncome ? theme.tabActive : 'grey' }]}>Thu nhập</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 250 }}>
                {type.map((item, index) => (
                    <TypeItem
                        title={item.title}
                        key={index}
                        status={item.status}
                        budget={item.budget}
                        current={item.current}
                        item={item}
                        openDetailClassify={() => handleChooseItem(item)}
                    />
                ))}
            </ScrollView>
            <TouchableOpacity style={styles.addImageView} onPress={() => { setAddNewClassifyOpen(true) }}>
                <Image style={styles.addImage} source={require('../../../assets/images/icon/ic_plus.png')} />
            </TouchableOpacity>
            <AddNewClassify
                modalVisible={addNewClassifyOpen}
                setModalVisible={setAddNewClassifyOpen}
                listIcon={listIcon}
                setLoading={setLoading}
                handleGetlist={getListClassify}
            />
            <DetailClassify
                modalVisible={detailClassifyOpen}
                setModalVisible={setDetailClassifyOpen}
                item={chooseItem}
                listIcon={listIcon}
                setLoading={setLoading}
                handleGetlist={getListClassify}

            />
            <Loading visiable={loading} />
        </SafeAreaView>
    )
}

export default Classify