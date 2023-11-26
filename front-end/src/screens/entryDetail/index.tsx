import { View, Text, ScrollView, TextInput, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react';
import DatePicker from '@react-native-community/datetimepicker';
import st from './styles'
import Header from '../../components/header';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteEntryAction, getEntryByIdAction, updateEntryAction } from '../../services/entry/actions';
import { IEntryInfo } from './type';
import { AsyncThunkAction, Dispatch, AnyAction } from '@reduxjs/toolkit';
import { useNavigation } from '@react-navigation/native';
import { addCommas, removeNonNumeric } from '../../../utils/formatMoney';
import { BASE_URL } from '../../constants/api';
import useTheme from '../../hooks/useTheme';
import * as ImagePicker from 'expo-image-picker';

const EntryDetail = ({ route }) => {
    const { entryId } = route.params
    const styles = st();
    const theme = useTheme()
    const navigation = useNavigation<any>()
    const dispatch = useDispatch<any>()
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(new Date());
    const [image, setImage] = useState(null);
    const [entryInfo, setEntryInfo] = useState({
        transactionId: "",
        category: {
            categoryId: "",
            title: "",
            value: false,
            urlIcon: "",
            iconId: "",
        },
        amount: "",
        description: "",
        date: "",
        urlImage: "",
    })
    const onChangeInfoEntry = (name) => {
        return (value: any) => {
            setEntryInfo({ ...entryInfo, [name]: value })
            console.log('infoEntry', entryInfo)
        }
    }
    const handleSave = () => {
        setIsEdit(false);
        const imageToUpload = image
        const imageName = imageToUpload?.split('/').pop()
        const imageType = imageToUpload?.split('.').pop()
        const data = new FormData()
        data.append('description', entryInfo?.description)
        data.append('transactionId', entryInfo?.transactionId)
        data.append('date', moment(entryInfo?.date).format("DD-MM-YYYY"))
        data.append('amount', entryInfo?.amount)
        data.append('categoryId', entryInfo?.category?.categoryId)
        data.append('image', {
            uri: imageToUpload,
            type: `image/${imageType}`,
            name: imageName
        });
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
        dispatch(deleteEntryAction(entryId))
            .then(() => {
                Alert.alert('Xóa thành công')
                navigation.goBack()
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
                console.log(res?.payload, 'entryyyyyyyyyyy')
            })
            .catch(err => console.log('err', err))
    }
    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
        setEntryInfo({ ...entryInfo, date: moment(currentDate).format('DD-MM-YYYY') });
    };
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 6],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
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
                    <Text style={styles.timeText}>{moment(entryInfo?.date).format("DD-MM-YYYY")}</Text>
                </View>
                <View style={styles.titleContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={styles.titleIcon}
                            source={{ uri: `${BASE_URL}${entryInfo?.category?.urlIcon}` }}
                        />
                        <Text style={styles.title}>{entryInfo?.category?.title}</Text>
                    </View>
                    <TextInput
                        value={entryInfo?.category?.value ? 'Thu nhập' : 'Chi tiêu'}
                        style={styles.title}
                        editable={false}
                    />
                </View>
                <View style={styles.boxContainer}>
                    <Image
                        style={styles.boxIcon}
                        source={require('../../../assets/images/icon/ic_usd_circle.png')}
                    />
                    <View>
                        <TextInput
                            style={[styles.input, { color: isEdit ? theme.text_1 : 'grey' }]}
                            value={addCommas(removeNonNumeric(entryInfo?.amount))}
                            editable={isEdit}
                            onChangeText={onChangeInfoEntry('amount')}
                            focusable={isEdit}
                        />
                    </View>
                </View>
                <View style={styles.boxContainer}>
                    <Image
                        style={styles.boxIcon}
                        source={require('../../../assets/images/icon/ic_pen_circle.png')}
                    />
                    <View>
                        <TextInput
                            style={[styles.input, { minHeight: 50, verticalAlign: 'top', paddingTop: 16, color: isEdit ? theme.text_1 : 'grey' }]}
                            value={String(entryInfo?.description)}
                            multiline
                            editable={isEdit}
                            onChangeText={onChangeInfoEntry('description')}
                        />
                    </View>
                </View>
                {
                    !(entryInfo?.urlImage == '/image?imageId=null') && !image && <TouchableOpacity onPress={pickImage} style={[styles.boxContainer, { justifyContent: 'center', paddingVertical: 16 }]}>
                        <Image style={{ width: 200, height: 200, resizeMode: 'contain' }} source={{ uri: entryInfo?.urlImage == '/image?imageId=null' ? image : `${BASE_URL}${entryInfo?.urlImage}` }} />
                        {isEdit && <TouchableOpacity
                            onPress={() => {
                                setImage(null)
                                setEntryInfo({ ...entryInfo, urlImage: '/image?imageId=null' })
                            }}
                            style={{ position: 'absolute', top: 20, right: 20, padding: 10, borderRadius: 100, backgroundColor: '#CCCCCC' }}
                        >
                            <Image
                                source={require('../../../assets/images/icon/ic_delete.png')}
                                style={{ height: 15, width: 15, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>}
                    </TouchableOpacity>
                }
                {
                    isEdit && entryInfo?.urlImage == '/image?imageId=null' && !image && <TouchableOpacity
                        onPress={pickImage}
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20, height: 50, borderWidth: 1, borderStyle: 'dashed', borderColor: 'grey', marginHorizontal: 25, borderRadius: 10 }}
                    >
                        <Image
                            source={require('../../../assets/images/icon/ic_camera.png')}
                            style={{ height: 22, width: 22, resizeMode: 'contain', marginRight: 10 }}
                        />
                        <Text>Thêm ảnh</Text>
                    </TouchableOpacity>
                }
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
