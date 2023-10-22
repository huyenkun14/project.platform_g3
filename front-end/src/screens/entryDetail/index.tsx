import { View, Text, ScrollView, TextInput, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react';
import DatePicker from '@react-native-community/datetimepicker';
import { styles } from './styles'
import Header from '../../components/header';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteEntryAction, getEntryByIdAction, updateEntryAction } from '../../services/entry/actions';
import { IEntryInfo } from './type';
import { AsyncThunkAction, Dispatch, AnyAction } from '@reduxjs/toolkit';
import navigation from '../../navigation';
// import navigation from '../../navigation';

const EntryDetail = ({ route, navigation }) => {
    const { entryId } = route.params
    const dispatch = useDispatch<any>()
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(new Date());
    const [entryInfo, setEntryInfo] = useState({
        transactionId: "",
        category: {
            categoryId: "",
            title: "",
            value: false
        },
        amount: "",
        description: "",
        date: ""
    })
    const onChangeInfoEntry = (name) => {
        return (value: any) => {
            setEntryInfo({ ...entryInfo, [name]: value })
            console.log('infoEntry', entryInfo)
        }
    }

    const handleSave = () => {
        setIsEdit(false);
        const data = new FormData()
        data.append('description', entryInfo?.description)
        data.append('transactionId', entryInfo?.transactionId)
        data.append('date', moment(entryInfo?.date).format("DD-MM-YYYY"))
        data.append('amount', entryInfo?.amount)
        data.append('categoryId', entryInfo?.category?.categoryId)
        console.log(data)
        dispatch(updateEntryAction(data))
            .then((res) => {
                console.log(res)
                // navigation.navigate('Add')
            })
            .catch(err => {
                console.log('Save error', err);
            });
    }

    const handleDelete = () => {
        Alert.alert('Xóa thành công')
        dispatch(deleteEntryAction(entryId))
            .then(() => {
                navigation.navigate('Add')
            })
            .catch(err => {
                console.log('Delete error', err);
            });
    }

    useEffect(() => {
        getEntry()
    }, [])

    const getEntry = () => {
        dispatch(getEntryByIdAction(entryId))
            .then(res => {
                setEntryInfo(res?.payload)
            })
            .catch(err => console.log('err', err))
    }
    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
        setEntryInfo({ ...entryInfo, date: moment(currentDate).format('DD-MM-YYYY') });
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.bg} />
            <Header title='Chi tiết' isBack={true} />
            <ScrollView contentContainerStyle={{ paddingBottom: 250 }}>
                <View style={[styles.timeContainer, styles.mgBottom20]}>
                    <TouchableOpacity
                        style={styles.timeIconView}
                        onPress={() => { setShowDatePicker(isEdit) }}
                    >
                        <Image
                            style={styles.timeIcon}
                            source={require('../../../assets/images/icon/ic_calendar.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.timeText}>{moment(date).format("DD-MM-YYYY")}</Text>
                </View>
                <View style={styles.titleContainer}>
                    <TextInput
                        value={entryInfo?.category?.value ? 'Thu nhập' : 'Chi tiêu'}
                        style={styles.title}
                        editable={false}
                    />
                    <Image
                        style={styles.titleIcon}
                        source={require('../../../assets/images/icon/ic_coins.png')}
                    />
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.boxItemContainer}>
                        <Image
                            style={styles.boxIcon}
                            source={require('../../../assets/images/icon/ic_circle_ellipsis.png')}
                        />
                        <View>
                            <Text style={styles.inputLabel}>Loại</Text>
                            <TextInput
                                style={styles.input}
                                value={String(entryInfo?.category?.title)}
                                editable={false}
                                onChangeText={onChangeInfoEntry('title')}
                            />
                        </View>
                    </View>
                    <View style={styles.boxItemContainer}>
                        <Image
                            style={styles.boxIcon}
                            source={require('../../../assets/images/icon/ic_usd_circle.png')}
                        />
                        <View>
                            <Text style={styles.inputLabel}>Số tiền</Text>
                            <TextInput
                                style={styles.input}
                                value={String(entryInfo?.amount)}
                                editable={isEdit}
                                onChangeText={onChangeInfoEntry('amount')}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.boxItemContainer}>
                        <Image
                            style={styles.boxIcon}
                            source={require('../../../assets/images/icon/ic_pen_circle.png')}
                        />
                        <View>
                            <Text style={styles.inputLabel}>Ghi chú</Text>
                            <TextInput
                                style={[styles.input, { height: 80, marginTop: 3 }]}
                                value={String(entryInfo?.description)}
                                multiline
                                editable={isEdit}
                                onChangeText={onChangeInfoEntry('description')}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    {isEdit ? (
                        <TouchableOpacity
                            style={[styles.button, styles.buttonSave]}
                            onPress={handleSave}
                        >
                            <Text style={[styles.buttonText, styles.buttonEditText]}>Lưu thay đổi</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={[styles.button, styles.buttonEdit]}
                            onPress={() => {
                                setIsEdit(!isEdit)
                            }}
                        >
                            <Text style={[styles.buttonText, styles.buttonEditText]}>Chỉnh sửa giao dịch</Text>
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity style={[styles.button, styles.buttonDel]} onPress={handleDelete}>
                        <Text style={[styles.buttonText, styles.buttonDelText]}>Xóa giao dịch</Text>
                    </TouchableOpacity>
                </View>
                {showDatePicker &&
                    <DatePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onChangeDate}
                    />
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default EntryDetail

function dispatch(arg0: AsyncThunkAction<any, number, { state?: unknown; dispatch?: Dispatch<AnyAction>; extra?: unknown; rejectValue?: unknown; serializedErrorType?: unknown; pendingMeta?: unknown; fulfilledMeta?: unknown; rejectedMeta?: unknown; }>) {
    throw new Error('Function not implemented.');
}
