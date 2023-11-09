import { View, Text, Modal, TextInput, TouchableOpacity, Image, ToastAndroid, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { createClassifyAction } from '../../../../services/classify/actions'
import Checkbox from 'expo-checkbox';
import { BASE_URL } from '../../../../constants/api'
import { defaultColors } from '../../../../theme'
import { createCategory } from '../../../../services/classify'

const AddNewClassify = ({ modalVisible, setModalVisible, listIcon, setLoading, handleGetlist }) => {
    const dispatch = useDispatch<any>()
    const [isIncomeChecked, setIncomeChecked] = useState(false);
    const [iconCurrent, setIconCurrent] = useState<number>(null);

    const [infoClassify, setInfoClassify] = useState({
        title: '',
        image: '',
        value: false
    })

    const handleClearData = () => {
        setInfoClassify({
            title: '',
            image: '',
            value: false
        })
        setIconCurrent(null)
    }
    const onChangeInfoClassify = (name) => {
        return (value: any) => {
            setInfoClassify({ ...infoClassify, [name]: value })
            console.log('infoClassify', infoClassify)
        }
    }
    const handleChangeInfoClassifyValue = (value: boolean) => {
        let _data = { ...infoClassify }
        _data.value = value
        setInfoClassify(_data)
    }
    const handleCreateClassify = async () => {
        setLoading(true)
        const res = await createCategory({
            iconId: iconCurrent,
            title: infoClassify.title,
            value: isIncomeChecked,
        })
        setLoading(false)
        if (res?.status === 200) {
            handleGetlist?.()
            handleClearData()
            ToastAndroid.show('Thêm danh mục thành công', ToastAndroid.SHORT)
            setModalVisible(false)
        }
        else {
            handleClearData()
            ToastAndroid.show('Thêm danh mục không thành công', ToastAndroid.SHORT)
            setModalVisible(false)
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
                        <View style={styles.checkboxContainer}>
                            <View style={styles.checkboxView}>
                                <Checkbox
                                    style={styles.checkbox}
                                    value={isIncomeChecked}
                                    onValueChange={setIncomeChecked}
                                    color={isIncomeChecked ? '#4630EB' : undefined}
                                />
                                <Text>Thu nhập</Text>
                            </View>
                        </View>
                        <View style={styles.addImage}>
                            <ScrollView style={{ width: "100%", height: "100%" }} showsVerticalScrollIndicator={false}>
                                <View
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        justifyContent: "space-around",
                                    }}
                                >
                                    {listIcon &&
                                        listIcon.length > 0 &&
                                        listIcon.map((it) => {
                                            return (
                                                <View
                                                    style={{
                                                        padding: 10,
                                                        marginTop: 5,
                                                        borderColor:
                                                            it?.id !== iconCurrent
                                                                ? defaultColors.borderColor
                                                                : defaultColors.tabActive,
                                                        borderWidth: 1,
                                                        borderRadius: 5,
                                                    }}
                                                >
                                                    <TouchableOpacity onPress={() => setIconCurrent(it?.id)}>
                                                        <Image
                                                            source={{ uri: `${BASE_URL}${it?.url}` }}
                                                            style={{ width: 35, height: 35 }}
                                                            resizeMode="stretch"
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            );
                                        })}
                                </View>
                            </ScrollView>
                        </View>
                        {/* </TouchableOpacity> */}
                        <TouchableOpacity onPress={handleCreateClassify}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Thêm danh mục</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default AddNewClassify