import { View, Text, Modal, TextInput, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { createClassifyAction } from '../../services/classify/actions'
import { createBudgetAction } from '../../services/budget/actions'
import Checkbox from 'expo-checkbox';

const AddNewClassify = ({ modalVisible, setModalVisible }) => {
    const dispatch = useDispatch<any>()
    const [isIncomeChecked, setIncomeChecked] = useState(false);
    const [isExpenseChecked, setExpenseChecked] = useState(false);

    const [infoClassify, setInfoClassify] = useState({
        title: '',
        image: '',
        value: false
    })
    const onChangeInfoClassify = (name) => {
        return (value: any) => {
            setInfoClassify({ ...infoClassify, [name]: value })
            console.log('infoClassify', infoClassify)
        }
    }
    const handleCreateClassify = () => {
        dispatch(createClassifyAction({
            title: infoClassify.title,
            value: infoClassify.value
        }))
            .then(res => {
                console.log(res)
                ToastAndroid.show('Thêm danh mục thành công', ToastAndroid.SHORT)
                setModalVisible(false)
            })
            .catch(err => console.log('err', err))
    }

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalInner}>
                        <View style={styles.headerContainer}>
                            <View style={styles.empty} />
                            <Text style={styles.title}>Thêm danh mục</Text>
                            <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                                <Image
                                    source={require('../../../assets/images/icon/ic_close.png')}
                                    style={styles.closeIcon}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.inputLabel}>Tên</Text>
                        <View style={styles.shadow}>
                            <TextInput
                                value={infoClassify.title}
                                onChangeText={onChangeInfoClassify('title')}
                                style={styles.input}
                                placeholder='Nhập tên danh mục'
                            />
                        </View>
                        <View style={styles.checkboxContainer}>
                            <View style={styles.checkboxView}>
                                <Checkbox
                                    style={styles.checkbox}
                                    value={isIncomeChecked}
                                    onValueChange={onChangeInfoClassify('value')}
                                    color={isIncomeChecked ? '#4630EB' : undefined}
                                />
                                <Text>Thu nhập</Text>
                            </View>
                            <View style={styles.checkboxView}>
                                <Checkbox
                                    style={styles.checkbox}
                                    value={isExpenseChecked}
                                    onValueChange={onChangeInfoClassify('value')}
                                    color={isExpenseChecked ? '#4630EB' : undefined}
                                />
                                <Text>Chi tiêu</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <View style={styles.addImage}>
                                <Image
                                    source={require('../../../assets/images/icon/ic_camera.png')}
                                    style={styles.addImageIcon}
                                />
                                <Text style={styles.addImageText}>Chọn ảnh</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleCreateClassify}>
                            <Text style={styles.button}>Thêm danh mục</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default AddNewClassify