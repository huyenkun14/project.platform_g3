import { View, Text, Modal, TouchableOpacity, Image, TextInput, ToastAndroid, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import st from './styles'
import moment from 'moment';
import DatePicker from '@react-native-community/datetimepicker';
import { useDispatch } from 'react-redux';
import { getAllClassifyAction } from '../../../../services/classify/actions';
import { createBudgetAction } from '../../../../services/budget/actions';
import { addCommas, removeNonNumeric } from '../../../../../utils/formatMoney';
import ListCategoryModal from '../../../../components/listCategoryModal';
import { checkWarningAction } from '../../../../services/notification/actions';
import Loading from '../../../../../utils/loading/Loading';

const AddNewBudget = ({ modalVisible, setModalVisible }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [category, setCategory] = useState<any>()
    const [isListCategory, showListCategory] = useState(false)
    const [listClassify, setListClassify] = useState([]);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [date, setDate] = useState<Date>(new Date());
    const dispatch = useDispatch<any>()
    const styles = st();
    const [infoBudget, setInfoBudget] = useState({
        startDate: '',
        endDate: '',
        categoryId: '',
        amount: '',
    })
    useEffect(() => {
        getListClassify()
    }, [])
    const getListClassify = () => {
        dispatch(getAllClassifyAction())
            .then(res => {
                const convertListClassify = res?.payload?.filter(item => item?.value === false).map((item, index) => ({ label: item.title, value: item.categoryId }))
                setListClassify(convertListClassify)
            })
            .catch(err => console.log('err', err))
    }
    const handleCreateBudget = () => {
        let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        dispatch(createBudgetAction({
            startDate: moment(firstDay).format("DD-MM-YYYY"),
            endDate: moment(lastDay).format("DD-MM-YYYY"),
            categoryId: category.categoryId,
            amount: String(infoBudget?.amount).replace(/\./g, '')
        }))
            .then(res => {
                setLoading(true)
                if (res?.payload) {
                    ToastAndroid.show('Tạo ngân sách thành công', ToastAndroid.SHORT)
                    setModalVisible(false)
                    setLoading(false)
                } else {
                    ToastAndroid.show('Có lỗi!', ToastAndroid.SHORT)
                    setLoading(false)
                }
            })
            .catch(err => {
                console.log('err', err)
                ToastAndroid.show('Có lỗi!', ToastAndroid.SHORT)
                setLoading(false)
            })
    }
    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };
    const onChangeInfoBudget = (name) => {
        return (value: any) => {
            setInfoBudget({ ...infoBudget, [name]: value })
            console.log('infoBudget', infoBudget)
        }
    }
    return (
        <View>
            <Modal
                animationType="slide"
                visible={modalVisible}
            >
                <View>
                    <View style={styles.timeContainer}>
                        <TouchableOpacity
                            style={styles.timeIconView}
                            onPress={() => { setShowDatePicker(true) }}
                        >
                            <Image
                                style={styles.timeIcon}
                                source={require('../../../../../assets/images/icon/ic_calendar.png')}
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
                <TouchableOpacity
                    style={[styles.input, styles.shadow]}
                    onPress={() => {
                        showListCategory(true)
                    }}
                >
                    <Text>{category?.title || 'Chọn danh mục'}</Text>
                </TouchableOpacity>
                <View style={styles.inputLabelContainer}>
                    <Image
                        style={styles.inputLabelIcon}
                        source={require('../../../../../assets/images/icon/ic_money.png')}
                    />
                    <Text style={styles.inputLabel}>Số tiền</Text>
                </View>
                <View style={styles.shadow}>
                    <TextInput
                        value={addCommas(removeNonNumeric(infoBudget?.amount))}
                        onChangeText={onChangeInfoBudget('amount')}
                        keyboardType="numeric"
                        style={styles.input}
                        placeholder='Nhập số tiền'
                    />
                    <Text style={styles.moneyText}>VNĐ</Text>
                </View>
                <TouchableOpacity
                    style={{ position: 'absolute', top: 30, right: 25, }}
                    onPress={() => { setModalVisible(false) }}
                >
                    <Image
                        source={require('../../../../../assets/images/icon/ic_close.png')}
                        style={styles.closeIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addBtn} onPress={handleCreateBudget}>
                    <Text style={styles.addBtnText}>Tạo ngân sách</Text>
                </TouchableOpacity>
                <ListCategoryModal
                    isHideNav={true}
                    modalVisible={isListCategory}
                    setModalVisible={showListCategory}
                    setEntryClassify={setCategory}
                />
                <Loading visiable={loading} />
            </Modal>
        </View>
    )
}

export default AddNewBudget