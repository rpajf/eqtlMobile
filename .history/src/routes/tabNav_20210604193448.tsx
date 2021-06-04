import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomNavigatorParamsList} from '../types';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import DashBoard from '../screens/DashBoard';
import Contact from '../screens/Contact';
import UserContracts from '../screens/UserContracts';
import ContractEmail from '../screens/ContractEmail';

// view-dashboard
// email-send-outline
const Tab = createBottomTabNavigator<BottomNavigatorParamsList>();

const Tabs = () => {
  const {Navigator, Screen} = Tab;
  return (
    <Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: 'tomato',

        inactiveTintColor: '#fff',
        style: {
          backgroundColor: '#2a2e5b',
        },
      }}>
      <Screen
        name="Dashboard"
        component={DashBoard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="dashboard" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="ContractEmail"
        component={DashBoard}
        options={{
          tabBarLabel: 'F ',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcon
              name="email-send-outline"
              color={color}
              size={25}
            />
          ),
        }}
      />

      {/* <Screen name="Contact" component={Contact} /> */}
      <Screen
        name="UserContracts"
        component={UserContracts}
        options={{
          tabBarLabel: 'Contracts',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="file-contract" color={color} size={20} />
          ),
        }}
      />
    </Navigator>
  );
};

export default Tabs;
