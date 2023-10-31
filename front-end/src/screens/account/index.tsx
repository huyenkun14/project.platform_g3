import { View, Text, StatusBar, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Header from '../../components/header'
import Entry from '../../components/entry'
import { defaultColors } from '../../theme'
import { NAVIGATION_TITLE } from '../../constants/navigation'
import { useNavigation } from '@react-navigation/native'
import { clearAllAsyncStorage } from '../../../utils/asyncStorage'
import UserInfoModal from './component/userInfo'

const Account = () => {
    const [userInfoModal, setUserInfoModal] = useState<boolean>(false)
    const navigation = useNavigation<any>()
    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView style={styles.container}>
                <Header title='Tài khoản' isBack={true} />
                <Text style={styles.title}>Moli</Text>
                {/* menu */}
                <TouchableOpacity onPress={() => { navigation.navigate(NAVIGATION_TITLE.HOME) }}>
                    <View style={styles.item}>
                        <Image style={styles.itemIcon} source={require('../../../assets/images/icon/ic_home.png')} />
                        <Text style={[styles.itemText]}>Trang chủ</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate(NAVIGATION_TITLE.INFO_USER) }}>
                    <View style={styles.item}>
                        <Image style={styles.itemIcon} source={require('../../../assets/images/icon/ic_info.png')} />
                        <Text style={[styles.itemText]}>Thông tin</Text>
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => { }}>
                    <View style={styles.item}>
                        <Image style={styles.itemIcon} source={require('../../../assets/images/icon/ic_setting.png')} />
                        <Text style={[styles.itemText]}>Cài đặt</Text>
                    </View>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => { }}>
                    <View style={styles.item}>
                        <Image style={styles.itemIcon} source={require('../../../assets/images/icon/ic_comment.png')} />
                        <Text style={[styles.itemText]}>Góp ý - đánh giá</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate(NAVIGATION_TITLE.LOGIN)
                    clearAllAsyncStorage()
                }}>
                    <View style={styles.item}>
                        <Image style={styles.itemIcon} source={require('../../../assets/images/icon/ic_exit.png')} />
                        <Text style={[styles.itemText, styles.logoutText]}>Đăng xuất</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <UserInfoModal
                modalVisible={userInfoModal}
                setModalVisible={setUserInfoModal}
            />
        </SafeAreaView >
    )
}

export default Account