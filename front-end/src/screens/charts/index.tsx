import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { LineChart, PieChart } from "react-native-chart-kit";
import Header from '../../components/header';
import { SCREEN_WIDTH, defaultColors } from '../../theme';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import DatePicker from '@react-native-community/datetimepicker';
import { getFinancialValueAction, getFinancialYearlyAction } from '../../services/financialSummary/actions';
import { formatMoney } from '../../../utils/formatMoney';

const Chart = () => {
  const [chartType, setChartType] = useState('1')
  const [isShowDetail, setIsshowDetail] = useState(false)
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [listFinancialYearly, setListFinancialYearly] = useState([])
  const [listFinancialCategory, setListFinancialCategory] = useState([])
  const [isIncome, setIsIncome] = useState<boolean>()
  const dispatch = useDispatch<any>()
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };
  useEffect(() => {
    getFinancialList()
  }, [date]);
  useEffect(() => {
    getFinancialValueList()
  }, [date, isIncome])

  const getFinancialList = () => {
    const year = moment(date).format("YYYY")
    dispatch(getFinancialYearlyAction(year))
      .then(res => {
        setListFinancialYearly(res?.payload)
      })
      .catch(err => console.log('erryearly', err))
  }
  const getFinancialValueList = () => {
    const data = new FormData()
    data.append('value', String(isIncome))
    data.append('monthAndYear', moment(date).format("MM-YYYY"))
    dispatch(getFinancialValueAction(data))
      .then(res => {
        console.log(res, 'incomeeeeeeeeeeeeeeeee')
        setListFinancialCategory(res?.payload)
      })
      .catch(err => console.log('monthAndYear', err))
  }

  const lineChartConfig = {
    backgroundColor: "blue",
    backgroundGradientFrom: "#0083b0",
    backgroundGradientTo: "#00b4db",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 10,
      paddingTop: 20,
    },
    propsForDots: {
      r: "1",
      strokeWidth: "1",
      stroke: "#fff"
    }
  }
  const pieChartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  const renderDate = () => {
    return (
      <View>
        <View style={styles.timeContainer}>
          <TouchableOpacity
            style={styles.timeIconView}
            onPress={() => { setShowDatePicker(true) }}
          >
            <Image
              style={styles.timeIcon}
              source={require('../../../assets/images/icon/ic_calendar.png')}
            />
          </TouchableOpacity>
          <Text style={styles.timeText}>{moment(date).format("MM-YYYY")}</Text>
        </View>
        {showDatePicker &&
          <DatePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        }
      </View>
    )
  }
  const renderChart = () => {
    const listIncomeYearly = listFinancialYearly?.length > 0 ? [...listFinancialYearly]?.map(item => item.incomeMoney) : [0]
    const listExpenseYearly = listFinancialYearly?.length > 0 ? [...listFinancialYearly]?.map(item => item?.spendingMoney) : [0]
    const dataPieChartIncome = listFinancialCategory?.length > 0 ? [...listFinancialCategory]?.map(item => ({
      name: item?.category?.title,
      population: item?.totalAmount,
      color: item?.color,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    })) : [0]
    const dataPieChartExpense = listFinancialCategory?.length > 0 ? [...listFinancialCategory]?.map(item => ({
      name: item?.category?.title,
      population: item?.totalAmount,
      color: item?.color,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    })) : [0]
    switch (chartType) {
      case '1':
        return (
          <View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <LineChart
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  datasets: [
                    {
                      data: listIncomeYearly,
                      strokeWidth: 2,
                      color: (opacity = 1) => 'green',
                    },
                    {
                      data: listExpenseYearly,
                      strokeWidth: 2,
                      color: (opacity = 1) => 'orange',
                    }
                  ]
                }}
                width={SCREEN_WIDTH - 30}
                height={300}
                yAxisInterval={1}
                formatYLabel={(yLabelIterator) => formatMoney(yLabelIterator)}
                chartConfig={lineChartConfig}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16
                }}
              />
            </View>
            <View style={styles.lineChartNoteContainer}>
              <View style={styles.lineChartNoteItem}>
                <View style={[styles.lineChartNoteIcon, { backgroundColor: 'green' }]} />
                <Text>Thu nhập</Text>
              </View>
              <View style={styles.lineChartNoteItem}>
                <View style={[styles.lineChartNoteIcon, { backgroundColor: 'orange' }]} />
                <Text>Chi tiêu</Text>
              </View>
            </View>
            <Text style={styles.detailButton}>Thống kê</Text>
            <View style={styles.ChartTable}>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>Tháng</Text>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>Thu nhập</Text>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>Chi tiêu</Text>
            </View>
            <View style={{ paddingBottom: 100 }}>
              {listFinancialYearly?.map((item, index) => (
                <View style={styles.ChartTable} key={index}>
                  <Text>{item?.month}</Text>
                  <Text>{item?.incomeMoney}</Text>
                  <Text>{item?.spendingMoney}</Text>
                </View>
              ))}
            </View>
          </View>
        )
      case '2':
        return (
          <View>
            {renderDate()}
            {listFinancialCategory?.length > 0 ? <View>
              <View style={styles.ChartContainer}>
                <PieChart
                  data={dataPieChartExpense}
                  width={SCREEN_WIDTH}
                  height={220}
                  chartConfig={pieChartConfig}
                  accessor={"population"}
                  backgroundColor={"transparent"}
                  paddingLeft={"15"}
                  style={{
                    flexDirection: 'column',
                  }}
                // hasLegend={false}
                />
                {/* <View style={styles.pieChartCircle} /> */}
              </View>
              <Text style={styles.detailButton}>Thống kê</Text>
              <View style={styles.ChartTable}>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>Danh mục</Text>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>VNĐ</Text>
              </View>
              {
                dataPieChartIncome?.map((item, index) => (
                  <View style={[styles.ChartTable,{backgroundColor: item?.color}]} key={index}>
                    <Text style={{color: "#fff"}}>{item?.name}</Text>
                    <Text style={{color: "#fff"}}>{item?.population}</Text>
                  </View>
                ))
              }
            </View> : <Text style={{ textAlign: 'center', marginTop: 50 }}>Không có giao dịch trong {moment(date).format("MM-YYYY")}</Text>}
          </View>

        )
      case '3':
        return (
          <View>
            {renderDate()}
            {listFinancialCategory?.length > 0 ?
              <View>
                <View>
                  <PieChart
                    data={dataPieChartIncome}
                    width={SCREEN_WIDTH}
                    height={220}
                    chartConfig={pieChartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft={"15"}
                  />
                </View>
                <Text style={styles.detailButton}>Thống kê</Text>
                <View style={styles.ChartTable}>
                  <Text style={{ fontSize: 16, fontWeight: '500' }}>Danh mục</Text>
                  <Text style={{ fontSize: 16, fontWeight: '500' }}>VNĐ</Text>
                </View>
                {
                  dataPieChartIncome?.map((item, index) => (
                    <View key={index} style={[styles.ChartTable,{backgroundColor: item?.color}]}>
                      <Text style={{color: "#fff"}}>{item?.name}</Text>
                      <Text style={{color: "#fff"}}>{item?.population}</Text>
                    </View>
                  ))
                }
              </View> : <Text style={{ textAlign: 'center', marginTop: 50 }}>Không có giao dịch trong {moment(date).format("MM-YYYY")}</Text>
            }
          </View>
        )
    }
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container} contentContainerStyle={{paddingBottom:100}}>
        <Header title='Biểu đồ' />
        {/* options */}
        <View style={styles.option}>
          <TouchableOpacity onPress={() => { setChartType('1') }}>
            <Text style={[styles.optionTitle, { backgroundColor: chartType == '1' ? defaultColors.flatListItem : '#d8d8d8' }]}>Tổng quan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setChartType('2'), setIsIncome(false) }}>
            <Text style={[styles.optionTitle, { backgroundColor: chartType == '2' ? defaultColors.flatListItem : '#d8d8d8' }]}>Chi tiêu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setChartType('3'), setIsIncome(true) }}>
            <Text style={[styles.optionTitle, { backgroundColor: chartType == '3' ? defaultColors.flatListItem : '#d8d8d8' }]}>Thu nhập</Text>
          </TouchableOpacity>
        </View>
        {renderChart()}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Chart