import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAllClassifyAction } from '../../services/classify/actions'
import { useDispatch } from 'react-redux'
import Header from '../../components/header'
import { styles } from './styles'
import { SCREEN_WIDTH } from '../../theme'
import { getBudgetByMonthAction } from '../../services/budget/actions'
import DatePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import AddNewBudget from './component/addNewBudget'
import { getFinancialValueAction } from '../../services/financialSummary/actions'

const Budget = () => {
    const dispatch = useDispatch<any>()
    const [isAddBudget, setAddBudget] = useState(false)
    const [listBudget, setListBudget] = useState([])
    const [date, setDate] = useState<Date>(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [listFinancialCategory, setListFinancialCategory] = useState([])
    const rangeWidth = SCREEN_WIDTH / 2
    useEffect(() => {
        getListBudget()
        getFinancialValueList()
    }, [isAddBudget, date])
    const getListBudget = () => {
        dispatch(getBudgetByMonthAction(moment(date).format('MM-YYYY')))
            .then(res => {
                setListBudget(res?.payload)
                console.log(res, 'budgetttttttt')
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
                    }))).map((item, index) => (
                        <TouchableOpacity key={index}>
                            <View style={styles.budgetContainer}>
                                <View style={styles.typeContainer}>
                                    <View style={styles.image} />
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
                    )) : <Text style={{ textAlign: 'center', marginTop: 50 }}>Chưa có ngân sách nào được tạo trong tháng {moment(date).format('MM-YYYY')}.</Text>
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
        </View>
    )
}

export default Budget