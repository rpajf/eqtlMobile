import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomNavigatorParamsList} from '../types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import DashBoard from '../screens/DashBoard';
import Contact from '../screens/Contact';
import UserContracts from '../screens/UserContracts';
import {View, Text, TouchableOpacity} from 'react-native';
// view-dashboard

const Tab = createBottomTabNavigator<BottomNavigatorParamsList>();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: 'tomato',

        inactiveTintColor: '#fff',
        style: {
          backgroundColor: '#2a2e5b',
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashBoard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="dashboard" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen
        name="UserContracts"
        component={UserContracts}
        options={{
          tabBarLabel: 'Contracts',
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name="file-contract" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
