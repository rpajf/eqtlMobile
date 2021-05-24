import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DashBoard2 from '../screens/DashBoard2';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={}>
      <Tab.Screen name="Dashboard2" component={DashBoard2} />
    </Tab.Navigator>
  );
};

export default Tabs;