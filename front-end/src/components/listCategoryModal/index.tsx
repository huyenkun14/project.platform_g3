import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, Button, TextInput, Modal, StyleSheet, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform, ToastAndroid, KeyboardAvoidingView, Alert, FlatList } from 'react-native';
import st from './styles'
import { useDispatch } from 'react-redux'
import { getClassifyByValueAction } from '../../services/classify/actions'
import { BASE_URL } from '../../constants/api';
import useTheme from '../../hooks/useTheme';

const ListCategoryModal = ({ modalVisible, setModalVisible, setEntryClassify, isHideNav }) => {

    const styles = st();
    const theme = useTheme();
    const [listCategory, setListCategory] = useState([])
    const [isIncomeTab, setIncomeTab] = useState(false)
    const dispatch = useDispatch<any>()

    useEffect(() => {
        if (isIncomeTab) {
            getListClassify(true)
        } else getListClassify(false)
    }, [])

    const getListClassify = (value) => {
        dispatch(getClassifyByValueAction(value))
            .then(res => {
                setListCategory(res.payload)
                console.log(res)
            })
            .catch(err => console.log('err', err))
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <TouchableWithoutFeedback onPress={() => { setModalVisible(false) }}>
                <View style={styles.modalContainer}>
                    <TouchableWithoutFeedback onPress={() => { setModalVisible(true) }}>
                        <View style={styles.modalInner}>
                            <Text style={styles.title}>Chọn danh mục</Text>
                            {!isHideNav&&<View style={styles.optionContainer}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIncomeTab(false)
                                        getListClassify(false)
                                    }}
                                    style={[styles.option, { borderBottomColor: isIncomeTab ? theme.borderColor : theme.tabActive }]}
                                >
                                    <Text style={[styles.optionText, { color: isIncomeTab ? 'grey' : theme.tabActive }]}>Chi tiêu</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIncomeTab(true)
                                        getListClassify(true)
                                    }}
                                    style={[styles.option, { borderBottomColor: isIncomeTab ? theme.tabActive : theme.borderColor }]}
                                >
                                    <Text style={[styles.optionText, { color: isIncomeTab ? theme.tabActive : 'grey' }]}>Thu nhập</Text>
                                </TouchableOpacity>
                            </View>}
                            <FlatList
                                data={listCategory}
                                renderItem={({ item }) => (
                                    <TouchableOpacity key={item?.categoryId} onPress={() => {
                                        setEntryClassify(item)
                                        setModalVisible(false)
                                    }}>
                                        <View style={styles.container}>
                                            <View style={styles.typeContainer}>
                                                <View style={styles.image}>
                                                    <Image style={styles.imageIcon} resizeMode='stretch' source={{ uri: item?.iconId ? `${BASE_URL}${item?.urlIcon}` : 'https://cdn-icons-png.flaticon.com/512/447/447120.png' }} />
                                                </View>
                                                <Text style={styles.title}>{item?.title}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
export default ListCategoryModal;