import { View, Text, Modal, TextInput, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { useDispatch } from 'react-redux'

const DetailClassify = ({ modalVisible, setModalVisible, isIncomeStatus }) => {
    const dispatch = useDispatch<any>()
    const [infoClassify, setInfoClassify] = useState({
        title: '',
        image: '',
        budget: '',
        value: isIncomeStatus,
    })
    const onChangeInfoClassify = (name) => {
        return (value: any) => {
            setInfoClassify({ ...infoClassify, [name]: value })
            console.log('infoClassify', infoClassify)
        }
    }
    // const handleCreateClassify = () => {
    //     dispatch(createClassifyAction({
    //       title: infoClassify.title,
    //       value: infoClassify.value
    //     }))
    //       .then(res => {
    //         console.log(res)
    //         ToastAndroid.show('Thêm danh mục thành công',ToastAndroid.SHORT)
    //         setModalVisible(false)
    //       })
    //       .catch(err => console.log('err', err))
    //   }
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
                            <Text style={styles.title}>Chi tiết danh mục</Text>
                            <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                                <Image
                                    source={require('../../../../../assets/images/icon/ic_close.png')}
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
                        {isIncomeStatus && <>
                            <Text style={styles.inputLabel}>Ngân sách</Text>
                            <View style={styles.shadow}>
                                <TextInput
                                    value={infoClassify.budget}
                                    onChangeText={onChangeInfoClassify('budget')}
                                    style={styles.input}
                                    placeholder='Nhập ngân sách cho danh mục'
                                />
                            </View>
                        </>
                        }
                        <TouchableOpacity>
                            <View style={styles.addImage}>
                                <Image
                                    source={require('../../../../../assets/images/icon/ic_camera.png')}
                                    style={styles.addImageIcon}
                                />
                                <Text style={styles.addImageText}>Chọn ảnh</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={styles.button}>Chỉnh sửa danh mục</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={styles.button}>Xóa danh mục</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default DetailClassify