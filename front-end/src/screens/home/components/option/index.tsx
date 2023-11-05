import { View, Text, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { NAVIGATION_TITLE } from '../../../../constants/navigation'
import { useNavigation } from '@react-navigation/native'
import { defaultColors, handleChangeTheme, themeMode } from '../../../../theme'

const Option = (props) => {
    const navigation = useNavigation<any>()
    const { icon, title, router, theme } = props
    const [openModalTheme, setOpenModalTheme] = useState<boolean>(false)
    const handleToggle = (theme: string) => {
        setOpenModalTheme(false)
        // handleChangeTheme(theme)
    }
    return (
        <View style={styles.optionContainer}>
            <TouchableOpacity onPress={() => theme ? setOpenModalTheme(true) : navigation.navigate(router)}>
                <View style={styles.optionIconContainer}>
                    <Image source={icon} style={styles.optionIcon} />
                </View>
            </TouchableOpacity>
            <Text style={styles.optionText}>{title}</Text>
            <Modal animationType='slide' visible={openModalTheme} transparent>
                <TouchableWithoutFeedback onPress={() => setOpenModalTheme(false)}>
                    <View style={{justifyContent: "flex-end",  width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.6)"}}>
                        <View style={{backgroundColor: defaultColors.WHITE, borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: 16}}>
                            <Text style={{fontSize: 18, fontWeight: "800", textAlign: "center"}}>Theme</Text>
                            <TouchableOpacity onPress={() => handleToggle('light')} style={{flexDirection: "row", alignItems: "center", marginTop: 16, justifyContent: "space-between"}}>
                                <Text style={{fontSize: 16, fontWeight: "600", color: themeMode === "light" ? defaultColors.tabActive : undefined}}>Giao diện sáng</Text>
                                {
                                    themeMode === "light" && <View style={{width: 8, height: 8 , borderRadius: 100, backgroundColor: defaultColors.tabActive}} />
                                }
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleToggle('dark')} style={{flexDirection: "row", alignItems: "center", marginTop: 16, justifyContent: "space-between"}}>
                                <Text style={{fontSize: 16, fontWeight: "600", color: themeMode === "dark" ? defaultColors.tabActive : undefined}}>Giao diện tối</Text>
                                {
                                    themeMode === "dark" && <View style={{width: 8, height: 8 , borderRadius: 100, backgroundColor: defaultColors.tabActive}} />
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