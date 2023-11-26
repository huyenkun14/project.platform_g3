import { View, Text, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useContext, useState } from 'react'
import st from './styles'
import { NAVIGATION_TITLE } from '../../../../constants/navigation'
import { useNavigation } from '@react-navigation/native'
import useTheme from '../../../../hooks/useTheme'
import { ThemeContext } from '../../../../theme'

const Option = (props) => {
    const navigation = useNavigation<any>()
    const styles = st();
    const { icon, title, router, theme } = props
    const { handleChangeTheme, themeMode } = useContext(ThemeContext)
    const [openModalTheme, setOpenModalTheme] = useState<boolean>(false)

    const handleToggle = (theme: string) => {
        setOpenModalTheme(false)
        handleChangeTheme(theme)
    }
    const themeX = useTheme();
    return (
        <View style={styles.optionContainer}>
            <TouchableOpacity onPress={() => theme ? setOpenModalTheme(true) : navigation.navigate(router)} style={styles.optionIconContainer}>
                <Image source={icon} style={styles.optionIcon} />
            </TouchableOpacity>
            <Text style={styles.optionText}>{title}</Text>
            <Modal animationType='slide' visible={openModalTheme} transparent>
                <TouchableWithoutFeedback onPress={() => setOpenModalTheme(false)}>
                    <View style={{ justifyContent: "flex-end", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.6)" }}>
                        <View style={{ backgroundColor: themeX.borderColor, borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: 16 }}>
                            <Text style={{ fontSize: 18, fontWeight: "800", textAlign: "center" }}>Chủ đề</Text>
                            <TouchableOpacity onPress={() => handleToggle('light')} style={{ flexDirection: "row", alignItems: "center", marginTop: 16, justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 16, fontWeight: "600", color: themeMode === "light" ? themeX.OPTION_ACTIVE : themeX.BLACK }}>Giao diện sáng</Text>
                                {
                                    themeMode === "light" && <View style={{ width: 8, height: 8, borderRadius: 100, backgroundColor: themeX.OPTION_ACTIVE }} />
                                }
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleToggle('dark')} style={{ flexDirection: "row", alignItems: "center", marginTop: 16, justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 16, fontWeight: "600", color: themeMode === "dark" ? themeX.OPTION_ACTIVE : themeX.BLACK }}>Giao diện tối</Text>
                                {
                                    themeMode === "dark" && <View style={{ width: 8, height: 8, borderRadius: 100, backgroundColor: themeX.OPTION_ACTIVE }} />
                                }
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleToggle('lovely')} style={{ flexDirection: "row", alignItems: "center", marginTop: 16, justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 16, fontWeight: "600", color: themeMode === "lovely" ? themeX.OPTION_ACTIVE : themeX.BLACK }}>Đáng iu</Text>
                                {
                                    themeMode === "lovely" && <View style={{ width: 8, height: 8, borderRadius: 100, backgroundColor: themeX.OPTION_ACTIVE }} />
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}

export default Option