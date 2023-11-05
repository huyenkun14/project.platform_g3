import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../screens/test';

const Tab = createMaterialTopTabNavigator();

const ClassifyTopTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Test" component={Home} />
      <Tab.Screen name="HomeTest" component={Home} />
    </Tab.Navigator>
  );
}
export default ClassifyTopTab