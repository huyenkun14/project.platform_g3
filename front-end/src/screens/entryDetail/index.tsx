import { View, Text, ScrollView, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import DatePicker from '@react-native-community/datetimepicker';
import { styles } from './styles'
import Header from '../../components/header';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { getEntryByIdAction } from '../../services/entry/actions';

const EntryDetail = ({ route }) => {
    const { entryId } = route.params
    const dispatch = useDispatch<any>()
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(new Date());
    const [entryInfo, setEntryInfo] = useState({})
    useEffect(() => {
        getEntry()
    }, [])
    const getEntry = () => {
        dispatch(getEntryByIdAction(entryId))
            .then(res => {
                setEntryInfo(res?.payload)
                console.log(res)
                console.log('entryId', entryId)
            })
            .catch(err => console.log('err', err))
    }
    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
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
                        value='Học phí'
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
                            tintColor={'crimson'}
                        />
                        <View>
                            <Text style={styles.inputLabel}>Loại</Text>
                            <TextInput
                                style={styles.input}
                                value='Chi tiêu'
                                editable={false}
                            />
                        </View>
                    </View>
                    <View style={styles.boxItemContainer}>
                        <Image
                            style={styles.boxIcon}
                            source={require('../../../assets/images/icon/ic_usd_circle.png')}
                            tintColor={'green'}
                        />
                        <View>
                            <Text style={styles.inputLabel}>Số tiền</Text>
                            <TextInput
                                style={styles.input}
                                value='2,000,000'
                                editable={isEdit}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.boxItemContainer}>
                        <Image
                            style={styles.boxIcon}
                            source={require('../../../assets/images/icon/ic_pen_circle.png')}
                            tintColor={'orange'}
                        />
                        <View>
                            <Text style={styles.inputLabel}>Ghi chú</Text>
                            <TextInput
                                style={[styles.input, { height: 80, verticalAlign: 'top', marginTop: 3 }]}
                                value='Học thêm tiếng anh'
                                multiline
                                editable={isEdit}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonEdit]}
                        onPress={() => {
                            setIsEdit(!isEdit)
                        }}
                    >
                        <Text style={[styles.buttonText, styles.buttonEditText]}>Chỉnh sửa giao dịch</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonDel]}>
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