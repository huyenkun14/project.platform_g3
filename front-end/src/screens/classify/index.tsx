import { SafeAreaView, TouchableOpacity, View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import Header from '../../components/header';
import TypeItem from './component/typeItem';
import { typeData } from '../../mock/classify';

const Classify = () => {

    const incomeType = typeData.filter(item => item.status === 'thu nhập')
    const expenseType = typeData.filter(item => item.status === 'chi tiêu')
    const [type, setType] = useState(expenseType)

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Phân loại" isBack={false} />
            <View style={styles.option}>
                <TouchableOpacity onPress={() => setType(expenseType)}>
                    <View style={styles.optionBtn}>
                        <Text style={styles.optionText}>Chi tiêu ({expenseType.length})</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setType(incomeType)}>
                    <View style={styles.optionBtn}>
                        <Text style={styles.optionText}>Thu nhập ({incomeType.length})</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 250 }}>
                {type.map((item, index) => (
                    <TypeItem title={item.title} key={index} status={item.status} budget={item.budget} current={item.current} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Classify