import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView, Modal, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAllClassifyAction } from '../../services/classify/actions'
import { useDispatch } from 'react-redux'
import Header from '../../components/header'
import { styles } from './styles'
import { SCREEN_WIDTH, defaultColors } from '../../theme'
import { getBudgetByMonthAction } from '../../services/budget/actions'
import DatePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import AddNewBudget from './component/addNewBudget'
import { getFinancialValueAction } from '../../services/financialSummary/actions'
import { Keyboard } from 'react-native'
import { deleteBudget, updateBudget } from '../../services/budget'
import { ToastAndroid } from 'react-native'
import Loading from '../../../utils/loading/Loading'
import { BASE_URL } from '../../constants/api'

const Budget = () => {
    const dispatch = useDispatch<any>()
    const [isAddBudget, setAddBudget] = useState(false)
    const [listBudget, setListBudget] = useState([])
    const [date, setDate] = useState<Date>(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [listFinancialCategory, setListFinancialCategory] = useState([])
    const [valueCurrent, setValueCurrent] = useState('')
    const rangeWidth = SCREEN_WIDTH / 2
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [itemChoose, setItemChoose] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        getListBudget()
        getFinancialValueList()
    }, [isAddBudget, date])

    useEffect(() => {
        setValueCurrent(`${itemChoose?.amount}`)
    }, [itemChoose])

    const handleOpenModal = (item: any) => {
        setOpenModal(true)
        setItemChoose(item)
    }
    const getListBudget = () => {
        dispatch(getBudgetByMonthAction(moment(date).format('MM-YYYY')))
            .then(res => {
                setListBudget(res?.payload)
            })
            .catch(err => console.log('err', err))
    }
    const getFinancialValueList = () => {
        const data = new FormData()
        data.append('value', 'false')
        data.append('monthAndYear', moment(date).format("MM-YYYY"))
        dispatch(getFinancialValueAction(data))
            .then(res => {
                setListFinancialCategory(res?.payload)
            })
            .catch(err => console.log('monthAndYear', err))
    }
    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    const handleUpdate = async() => {
        setLoading(true)
        const res = await updateBudget({
            budgetId: itemChoose?.budgetId,
            categoryId: itemChoose?.category?.categoryId,
            amount: Number(valueCurrent),
            startDate: moment(itemChoose?.startDate).format('DD-MM-YYYY'),
            endDate: moment(itemChoose?.endDate).format('DD-MM-YYYY')
        })
        setLoading(false)
        if (res?.status === 200) {
            setOpenModal(false)
            getListBudget()
            ToastAndroid.show("Sửa budget thành công", ToastAndroid.SHORT);
        }
        else {
            setOpenModal(false)
            ToastAndroid.show("Sửa budget không thành công", ToastAndroid.SHORT);
        }
    }
    const handleDelete = async () => {
        setLoading(true)
        const res = await deleteBudget(itemChoose?.budgetId)
        setLoading(false)
        if (res?.status === 200){
            setOpenModal(false)
            getListBudget()
            ToastAndroid.show("Xóa budget thành công", ToastAndroid.SHORT);
        }
        else {
            setOpenModal(false)
            ToastAndroid.show("Xóa budget không thành công", ToastAndroid.SHORT);
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar />
            <Header title="Ngân sách" isBack={true} />
            <ScrollView>
                <View>
                    <View style={styles.timeContainer}>
                        <TouchableOpacity
                            style={styles.timeIconView}
                            onPress={() => { setShowDatePicker(true) }}
                        >
                            <Image
                                style={styles.timeIcon}
                                source={require('../../../assets/images/icon/ic_calendar.png')}
                            />
                        </TouchableOpacity>
                        <Text style={styles.timeText}>{moment(date).format("MM-YYYY")}</Text>
                    </View>
                    {showDatePicker &&
                        <DatePicker
                            value={date}
                            mode="date"
                            display="default"
                            onChange={onChangeDate}
                        />
                    }
                </View>
                {
                    listBudget?.length > 0 ? listBudget?.map((item1 => ({
                        ...listFinancialCategory?.find(item2 => item2?.category?.categoryId === item1?.category?.categoryId),
                        ...item1
                    }))).map((item, index) => {
                        return (
                        <TouchableOpacity key={index} onPress={() => handleOpenModal(item)} >
                            <View style={styles.budgetContainer}>
                                <View style={styles.typeContainer}>
                                    <View style={[styles.image, {padding: 10}]}>
                                        <Image source={{uri: `${BASE_URL}${item?.category?.urlIcon}`}} resizeMode='stretch' style={{width: '100%', height: '100%'}} />
                                    </View>
                                    <View>
                                        <Text style={styles.title}>{item?.category?.title}</Text>
                                        <View style={styles.range}>
                                            <View style={[styles.current,
                                            {
                                                width: item?.totalAmount ? (Number(item?.totalAmount) / Number(item?.amount)) * rangeWidth : 0,
                                                maxWidth: rangeWidth
                                            },
                                            (Number(item?.totalAmount) / Number(item?.amount)) >= 0.8 ? styles.warning : styles.safe
                                            ]} />
                                        </View>

                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}) : <Text style={{ textAlign: 'center', marginTop: 50 }}>Chưa có ngân sách nào được tạo trong tháng {moment(date).format('MM-YYYY')}.</Text>
                }
            </ScrollView>
            <TouchableOpacity
                style={styles.addImageContainer}
                onPress={() => { setAddBudget(true) }}
            >
                <Image
                    source={require('../../../assets/images/icon/ic_plus.png')}
                    style={styles.addImage}
                />
            </TouchableOpacity>
            <AddNewBudget
                modalVisible={isAddBudget}
                setModalVisible={setAddBudget}
            />
            <Modal transparent animationType='fade' visible={openModal}>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss()
                    setOpenModal(false)
                }}
                    >
                    <View style={{backgroundColor: 'rgba(0,0,0,0.6)', flex: 1, alignItems: 'center', justifyContent: "center"}}>
                        <View style={{width: 300, height: 200, backgroundColor: defaultColors.WHITE, borderRadius: 8, padding: 16}}>
                            <Text style={{fontSize: 18, fontWeight: "600", color: defaultColors.flatListItem, textAlign: "center"}}>Sửa ngân sách</Text>
                            <View style={{marginTop: 12}}>
                                <Text style={{fontSize: 16, fontWeight: "500", color: defaultColors.BLACK}}>Giá trị</Text>
                                <View style={{flexDirection: "row", alignItems: "center", marginTop: 12}}>
                                    <TextInput 
                                        placeholder='Giá trị' 
                                        keyboardType="numeric" 
                                        value={valueCurrent} 
                                        onChangeText={(text) => setValueCurrent(text)} 
                                        style={{
                                            borderWidth: 1, 
                                            borderColor: defaultColors.borderColor, 
                                            height: 40,
                                            flex: 1,
                                            padding: 5,
                                            textAlign: "right",
                                            borderRadius: 5,
                                            marginRight: 10
                                            }} />
                                    <Text>VND</Text>
                                </View>
                            </View>
                            <View style={{marginTop: 24, flexDirection: "row", justifyContent: "space-between"}}>
                                <TouchableOpacity onPress={handleUpdate}>
                                    <View style={{width: 150, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 8, backgroundColor: defaultColors.tabActive, overflow: "hidden"}}>
                                        <Text style={{
                                            fontSize: 15,
                                            fontWeight: "600",
                                            color: defaultColors.WHITE,
                                        }}>Chỉnh sửa</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleDelete}>
                                    <View style={{width: 100, height: 40, justifyContent: "center", alignItems: "center", borderRadius: 8, backgroundColor: defaultColors.CANCEL_BACKGROUNG, overflow: "hidden"}}>
                                        <Text style={{
                                            fontSize: 15,
                                            fontWeight: "600",
                                            color: defaultColors.WHITE,
                                        }}>Xóa</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Loading visiable={loading} />
        </View>
    )
}

export default Budget