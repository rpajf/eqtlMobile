import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DashBoard2 from '../screens/DashBoard2';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard2" component={DashBoard2} />
    </Tab.Navigator>
  );
};

export Tabs