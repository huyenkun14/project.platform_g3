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
    const incomeType = typeData.filter(item => item.status === 'thu nhập')
    const expenseType = typeData.filter(item => item.status === 'chi tiêu')
    const [type, setType] = useState(expenseType)
    const [isIncome, setIsIncome] = useState(false)
    const [searchText, setSearchText] = useState<string>('')
    const [addNewClassifyOpen, setAddNewClassifyOpen] = useState(false)
    const [detailClassifyOpen, setDetailClassifyOpen] = useState(false)
    const dispatch = useDispatch<any>()
    const [listClassify, setListClassify] = useState([]);
    useEffect(() => {
        getListClassify()
    }, [])
    const getListClassify = () => {
        dispatch(getAllClassifyAction())
            .then(res => {
                setListClassify(res?.payload)
                console.log(listClassify)
            })
            .catch(err => console.log('err', err))
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Phân loại" isBack={false} />
            <View style={styles.option}>
                <TouchableOpacity onPress={() => setType(expenseType)}>
                    <View style={styles.optionBtn}>
                        <Text style={styles.optionText}>Chi tiêu ({expenseType.length})</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setType(incomeType)}>
                    <View style={styles.optionBtn}>
                        <Text style={styles.optionText}>Thu nhập ({incomeType.length})</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchView}>
                    <TextInput style={styles.searchInput} placeholder='Tìm kiếm' />
                </View>
                <TouchableOpacity onPress={() => { setAddNewClassifyOpen(true) }}>
                    <View style={styles.searchImageView}>
                        <Image style={styles.searchImage} source={require('../../../assets/images/icon/ic_plus.png')} />
                    </View>
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
                        openDetailClassify={() => { setDetailClassifyOpen(true) }}
                    />
                ))}
            </ScrollView>
            <AddNewClassify
                isIncomeStatus={false}
                modalVisible={addNewClassifyOpen}
                setModalVisible={setAddNewClassifyOpen}
            />
            <DetailClassify
                modalVisible={detailClassifyOpen}
                setModalVisible={setDetailClassifyOpen}
                isIncomeStatus={false}
            />
        </SafeAreaView>
    )
}

export default Classify