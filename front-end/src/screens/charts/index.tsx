import { View, Text, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { chartDataExpense, chartDataIncome } from '../../mock/chart';
import Header from '../../components/header';
import { SCREEN_WIDTH } from '../../theme';

const Chart = () => {

  const [chartType, setChartType] = useState('1')

  const chartConfig = {
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
            <LineChart
              data={{
                labels: ["January", "February", "March", "April", "May", "June", "Junly"],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ]
                  },
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ]
                  }
                ]
              }}
              width={SCREEN_WIDTH} 
              height={220}
              yAxisLabel="$"
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </View>
        )
      case '2':
        return (
          <View style={styles.ChartContainer}>
            <PieChart
              data={chartDataExpense}
              width={SCREEN_WIDTH}
              height={220}
              chartConfig={chartConfig}
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
        )
      case '3':
        return (
          <View>
            <PieChart
              data={chartDataIncome}
              width={SCREEN_WIDTH}
              height={220}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
            />
          </View>
        )
    }
  }

  return (
    <View style={styles.container}>
      <Header title='Biểu đồ' />
      {/* options */}
      <View style={styles.option}>
        <TouchableOpacity onPress={() => { setChartType('1') }}>
          <Text style={[styles.optionTitle, { backgroundColor: chartType == '1' ? 'green' : '#d8d8d8' }]}>Tổng quan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setChartType('2') }}>
          <Text style={[styles.optionTitle, { backgroundColor: chartType == '2' ? 'green' : '#d8d8d8' }]}>Chi tiêu</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setChartType('3') }}>
          <Text style={[styles.optionTitle, { backgroundColor: chartType == '3' ? 'green' : '#d8d8d8' }]}>Thu nhập</Text>
        </TouchableOpacity>
      </View>
      {renderChart()}
    </View>
  )
}

export default Chart