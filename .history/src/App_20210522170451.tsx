import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from './screens/Landing';
import SignIn from './screens/SignIn';
import Profile from './screens/Profile';
import DashBoard2 from './screens/DashBoard2';
import tabNav from './routes/tabNav'

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#2A2E5B"
        translucent={true}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Dashboard2"
          screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="TabNavigator" component="">
          <Stack.Screen name="DashBoard2" component={DashBoard2} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
