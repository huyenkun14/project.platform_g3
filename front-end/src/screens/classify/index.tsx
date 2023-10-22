import { SafeAreaView, TouchableOpacity, View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import Header from '../../components/header';
import TypeItem from './component/typeItem';
import { typeData } from '../../mock/classify';
import { TextInput } from 'react-native-gesture-handler';
import AddNewClassify from '../../components/addNewClassify';
import { getAllClassifyAction } from '../../services/classify/actions';
import { useDispatch } from 'react-redux';
import DetailClassify from './component/detailClassify';

const Classify = () => {
    const [type, setType] = useState([])
    const [isIncome, setIsIncome] = useState(false)
    const [searchText, setSearchText] = useState<string>('')
    const [addNewClassifyOpen, setAddNewClassifyOpen] = useState(false)
    const [detailClassifyOpen, setDetailClassifyOpen] = useState(false)
    const dispatch = useDispatch<any>()
    const [listClassify, setListClassify] = useState([]);
    useEffect(() => {
        getListClassify()
        setType(listClassify?.filter(item => item?.value === false))
    }, [])
    const getListClassify = () => {
        dispatch(getAllClassifyAction())
            .then(res => {
                setListClassify(res?.payload)
            })
            .catch(err => console.log('err', err))
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Danh mục" isBack={false} />
            <View style={styles.option}>
                <TouchableOpacity onPress={() => {
                    setType(listClassify?.filter(item => item?.value === false))
                    setIsIncome(false)
                }}>
                    <View style={styles.optionBtn}>
                        <Text style={styles.optionText}>Chi tiêu</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setType(listClassify?.filter(item => item?.value === true))
                    setIsIncome(true)
                }}>
                    <View style={styles.optionBtn}>
                        <Text style={styles.optionText}>Thu nhập</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setAddNewClassifyOpen(true) }}>
                    <View style={styles.searchImageView}>
                        <Image style={styles.searchImage} source={require('../../../assets/images/icon/ic_plus.png')} />
                    </View>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.searchContainer}>
                <View style={styles.searchView}>
                    <TextInput style={styles.searchInput} placeholder='Tìm kiếm' />
                </View>
                <TouchableOpacity onPress={() => { setAddNewClassifyOpen(true) }}>
                    <View style={styles.searchImageView}>
                        <Image style={styles.searchImage} source={require('../../../assets/images/icon/ic_plus.png')} />
                    </View>
                </TouchableOpacity>
            </View> */}
            <ScrollView contentContainerStyle={{ paddingBottom: 250 }}>
                {type.map((item, index) => (
                    <TypeItem
                        title={item.title}
                        key={index}
                        status={item.status}
                        budget={item.budget}
                        current={item.current}
                        openDetailClassify={() => { setDetailClassifyOpen(true) }}
                    />
                ))}
            </ScrollView>
            <AddNewClassify
                modalVisible={addNewClassifyOpen}
                setModalVisible={setAddNewClassifyOpen}
            />
            <DetailClassify
                modalVisible={detailClassifyOpen}
                setModalVisible={setDetailClassifyOpen}
                isIncomeStatus={isIncome}
            />
        </SafeAreaView>
    )
}

export default Classify