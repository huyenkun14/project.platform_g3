import { View, Text, Modal, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'

const AddNewClassify = ({ modalVisible, setModalVisible, isIncomeStatus, onSubmit }) => {
    const [infoClassify, setInfoClassify] = useState({
        title: '',
        image: '',

    })
    const onChangeInfoClassify = (name) => {
        return (value: any) => {
            setInfoClassify({ ...infoClassify, [name]: value })
            console.log('infoClassify', infoClassify)
        }

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
                        {isIncomeStatus && <>
                            <Text style={styles.inputLabel}>Ngân sách</Text>
                            <View style={styles.shadow}>
                                <TextInput
                                    value={infoClassify.title}
                                    onChangeText={onChangeInfoClassify('title')}
                                    style={styles.input}
                                    placeholder='Nhập ngân sách cho danh mục'
                                />
                            </View>
                        </>
                        }
                        <TouchableOpacity>
                            <View style={styles.addImage}>
                                <Image
                                    source={require('../../../assets/images/icon/ic_camera.png')}
                                    style={styles.addImageIcon}
                                />
                                <Text style={styles.addImageText}>Chọn ảnh</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                            <Text style={styles.button}>Thêm danh mục</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default AddNewClassify