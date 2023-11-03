import { Modal, View, Image, Text, ActivityIndicator } from "react-native"
import styles from './styles.ts'

const Loading = ({visiable, description}:{visiable: boolean, description?: string}) => {
    return (
        <Modal transparent visible={visiable} animationType="fade">
            <View style={styles.container}>
                <View style={styles.mainBlock}>
                    <Image source={require('../../assets/splash.png')} style={styles.img} resizeMode="stretch" />
                    <View style={styles.flr}>
                        <Text style={styles.mgr} >{description ? description : "Đang tải"}</Text>
                        <ActivityIndicator size="small" color="#0000ff" />
                    </View>
                </View>
            </View>
        </Modal>
    )
} 

export default Loading;