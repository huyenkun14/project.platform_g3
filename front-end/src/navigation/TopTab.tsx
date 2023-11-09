import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../screens/test';
import Classify from '../screens/classify';

const TopTab = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator initialRouteName="ClassifyExpense">
      <Tab.Screen name="ClassifyExpense" component={Home} />
      <Tab.Screen name="ClassifyIncome" component={Classify} />
    </Tab.Navigator>
  );
}
const ClassifyTopTab = () => {
  return (
    <TopTab />
  )
}
export default ClassifyTopTab