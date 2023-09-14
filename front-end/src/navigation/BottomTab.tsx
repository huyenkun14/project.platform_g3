import React, { useCallback } from "react"
import { Image, View } from "react-native"
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { TabsData } from "../constants/bottomTab"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../screens/home"
import Activity from "../screens/add";
import Chart from "../screens/charts";
import History from "../screens/history";
import { defaultColors } from "../theme";
import Classify from "../screens/classify";

const MyBottomTabs = () => {

  const Tab = createBottomTabNavigator()

  const onTabPress = useCallback((e, navigation, route) => {
    e?.preventDefault()
    navigation.navigate(route?.name)
  }, [])

  const getTabBarVisibility = useCallback((route: object) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === undefined ||
      routeName === 'Home' ||
      routeName === 'Test'
    ) {
      return { display: 'flex' };
    }
    return { display: 'none' };
  }, []);

  const getOptions = useCallback(
    props => ({
      tabBarIcon: data => <TabBar props={{ ...data, tabName: props?.route?.name }} />,
      tabBarStyle: getTabBarVisibility(props?.route) as any,
    }),
    [getTabBarVisibility],
  );

  const TabBar = ({ props }: any) => {
    const { focused, tabName } = props
    const tab = TabsData.filter(item => item?.name === tabName)[0]
    const getColor = useCallback(() => {
      if (focused) return defaultColors.tabActive
      else return defaultColors.tabColor
    }, [focused])
    if (tabName === 'Activity')
      return (
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 60,
          height: 60,
          borderRadius: 100,
          backgroundColor: defaultColors.tabAdd,
          top: -25,

        }}>
          <Image
            source={tab?.icon}
            style={{ tintColor: defaultColors.text_white, height: 25, width: 25 }}
            resizeMode="contain"
          />
        </View>
      )
    else
      return (
        <Image
          source={tab?.icon}
          style={{ tintColor: getColor(), height: 25, width: 25 }}
          resizeMode="contain"
        />
      )
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 300,
          backgroundColor: defaultColors.backgroundColor
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={getOptions}
      />
      <Tab.Screen
        name="Chart"
        component={Chart}
        options={getOptions}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={getOptions}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={getOptions}
      />
      <Tab.Screen
        name="Classify"
        component={Classify}
        options={getOptions}
      />
    </Tab.Navigator>
  )
}

export default MyBottomTabs