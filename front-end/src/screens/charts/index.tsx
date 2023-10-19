import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { LineChart, PieChart } from "react-native-chart-kit";
import { chartDataExpense, chartDataIncome } from '../../mock/chart';
import Header from '../../components/header';
import { SCREEN_WIDTH, defaultColors } from '../../theme';

const Chart = () => {

  const [chartType, setChartType] = useState('1')
  const [isShowDetail, setIsshowDetail] = useState(false)

  var floor = Math.floor, abs = Math.abs, log = Math.log, round = Math.round, min = Math.min;
  var abbrev = ['k', 'M', 'B']; // abbreviations in steps of 1000x; extensible if need to edit

  function rnd(n, precision) {
    var prec = 10 ** precision;
    return round(n * prec) / prec;
  }

  function format(n) {
    var base = floor(log(abs(n)) / log(1000));
    var suffix = abbrev[min(abbrev.length - 1, base - 1)];
    base = abbrev.indexOf(suffix) + 1;
    return suffix ? rnd(n / 1000 ** base, 2) + suffix : '' + n;
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

  const renderChart = () => {
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
                      data: [5200000, 5000000, 5500000, 6000000, 5800000, 5000000, 5200000, 5100000, 5400000, 6000000, 4900000, 5000000,],
                      strokeWidth: 2,
                      color: (opacity = 1) => 'green',
                    },
                    {
                      data: [4000000, 4500000, 3900000, 5000000, 6100000, 4000000, 4300000, 5200000, 5000000, 5600000, 6500000, 4100000,],
                      strokeWidth: 2,
                      color: (opacity = 1) => 'orange',
                    }
                  ]
                }}
                width={SCREEN_WIDTH - 30}
                height={300}
                // verticalLabelRotation={20}
                yAxisInterval={1} // optional, defaults to 1
                formatYLabel={(yLabelIterator) => format(yLabelIterator)}
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
            <TouchableOpacity onPress={() => { setIsshowDetail(!isShowDetail) }}>
              <Text style={styles.detailButton}>Chi tiết</Text>
            </TouchableOpacity>
            {isShowDetail ? <View style={styles.detailContentContainer}>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
            </View> : ''}
          </View>
        )
      case '2':
        return (
          <View>
            <View style={styles.ChartContainer}>
              <PieChart
                data={chartDataExpense}
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
            <TouchableOpacity onPress={() => { setIsshowDetail(!isShowDetail) }}>
              <Text style={styles.detailButton}>Chi tiết</Text>
            </TouchableOpacity>
            {isShowDetail ? <View style={styles.detailContentContainer}>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
            </View> : ''}
          </View>
        )
      case '3':
        return (
          <View>
            <View>
              <PieChart
                data={chartDataIncome}
                width={SCREEN_WIDTH}
                height={220}
                chartConfig={pieChartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
              />
            </View>
            <TouchableOpacity onPress={() => { setIsshowDetail(!isShowDetail) }}>
              <Text style={styles.detailButton}>Chi tiết</Text>
            </TouchableOpacity>
            {isShowDetail ? <View style={styles.detailContentContainer}>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
              <Text>Hehe</Text>
            </View> : ''}
          </View>
        )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header title='Biểu đồ' />
        {/* options */}
        <View style={styles.option}>
          <TouchableOpacity onPress={() => { setChartType('1') }}>
            <Text style={[styles.optionTitle, { backgroundColor: chartType == '1' ? defaultColors.flatListItem : '#d8d8d8' }]}>Tổng quan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setChartType('2') }}>
            <Text style={[styles.optionTitle, { backgroundColor: chartType == '2' ? defaultColors.flatListItem : '#d8d8d8' }]}>Chi tiêu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setChartType('3') }}>
            <Text style={[styles.optionTitle, { backgroundColor: chartType == '3' ? defaultColors.flatListItem : '#d8d8d8' }]}>Thu nhập</Text>
          </TouchableOpacity>
        </View>
        {renderChart()}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Chart