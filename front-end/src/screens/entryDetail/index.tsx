import { View, Text, ScrollView, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import { Agenda, Calendar, LocaleConfig } from 'react-native-calendars';
import { styles } from './styles'
import Header from '../../components/header';

const EntryDetail = ({route}) => {
    const {title, time, price, note, status} =route.params
    const [selected, setSelected] = useState('');
    const [events, setEvents] = useState({});
    const [marksDate, setMarksDate] = useState({});
    const [refreshCalender, setRefreshCalender] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <Header title='Chi tiết' isBack={true} />
            <ScrollView contentContainerStyle={{paddingBottom: 250}}>
                <View style={[styles.calendarContainer, styles.mgBottom20]}>
                    <Calendar
                        style={styles.calendar}
                        onDayPress={day => {
                            setSelected(day.dateString);
                        }}
                        markedDates={{
                            [selected]: { selected: true, disableTouchEvent: true }
                        }}
                    />
                    {/* <Agenda
                        items={events}
                        // loadItemsForMonth={loadItems} // Function
                        refreshing={refreshCalender}
                        renderItem={(item) => {
                            return (
                                <View>
                                    <Text>hh</Text>
                                </View>
                            )
                        }}
                        markingType={'custom'}
                        markedDates={marksDate}
                    // ..other props
                    /> */}

                </View>
                <View style={[styles.contentRow,styles.mgBottom20]}>
                    <View>
                        <Text style={styles.inputLabel}>Loại</Text>
                        <TextInput style={[styles.input, styles.inputType]} editable={false} value={status}/>
                    </View>
                    <View>
                        <Text style={styles.inputLabel}>Danh mục</Text>
                        <TextInput style={[styles.input, styles.inputTitle]} editable={false} value={title}/>
                    </View>
                </View>
                <View style={styles.contentCol}>
                    <View style={styles.mgBottom20}>
                        <Text style={styles.inputLabel}>Số tiền</Text>
                        <TextInput style={styles.input} editable={false} value={String(price)}/>
                    </View>
                    <View>
                        <Text style={styles.inputLabel}>Ghi chú</Text>
                        <TextInput style={[styles.input, styles.inputNote]} multiline editable={false} value={note}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EntryDetail