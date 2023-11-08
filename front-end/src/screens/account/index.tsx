import { View, Text, StatusBar, Image, ScrollView, SafeAreaView, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import st from './styles'
import Header from '../../components/header'
import Entry from '../../components/entry'
import { NAVIGATION_TITLE } from '../../constants/navigation'
import { useNavigation } from '@react-navigation/native'
import { clearAllAsyncStorage } from '../../../utils/asyncStorage'
import ResetPasswordModal from './component/resetPassword'
import * as MailComposer from 'expo-mail-composer';

const Account = () => {
    const [userInfoModal, setUserInfoModal] = useState<boolean>(false)
    const navigation = useNavigation<any>()
    const styles = st();
    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView style={styles.container}>
                <Header title='Tài khoản' isBack={true} />
                <Image
                    style={styles.logo}
                    source={require('../../../assets/images/moly.png')}
                />
                {/* menu */}
                <TouchableOpacity style={styles.item} onPress={() => { navigation.navigate(NAVIGATION_TITLE.HOME) }}>
                    <Image style={styles.itemIcon} source={require('../../../assets/images/icon/ic_home.png')} />
                    <Text style={[styles.itemText]}>Trang chủ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => { navigation.navigate(NAVIGATION_TITLE.INFO_USER) }}>
                    <Image style={styles.itemIcon} source={require('../../../assets/images/icon/ic_info.png')} />
                    <Text style={[styles.itemText]}>Thông tin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => { setUserInfoModal(true) }}>
                    <Image style={styles.itemIcon} source={require('../../../assets/images/icon/ic_lock.png')} />
                    <Text style={[styles.itemText]}>Đổi mật khẩu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => {
                        MailComposer.composeAsync({
                            subject: 'test',
                            body: 'test',
                            recipients: ['molyhuce@gmail.com'],
                            isHtml: true
                        }).then(data => {
                            if (data.status == 'sent') {
                                ToastAndroid.show('Cảm ơn bạn đã góp ý cho Moly', ToastAndroid.SHORT)
                            }
                            console.log(data)
                        })
                            .catch(err => console.log(err))
                    }}>
                    <Image style={styles.itemIcon} source={require('../../../assets/images/icon/ic_comment.png')} />
                    <Text style={[styles.itemText]}>Góp ý - đánh giá</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={() => {
                    navigation.navigate(NAVIGATION_TITLE.LOGIN)
                    clearAllAsyncStorage()
                }}>
                    <Image style={[styles.itemIcon, { tintColor: 'crimson' }]} source={require('../../../assets/images/icon/ic_exit.png')} />
                    <Text style={[styles.itemText, styles.logoutText]}>Đăng xuất</Text>
                </TouchableOpacity>
            </ScrollView>
            <ResetPasswordModal
                modalVisible={userInfoModal}
                setModalVisible={setUserInfoModal}
            />
        </SafeAreaView >
    )
}

export default Account