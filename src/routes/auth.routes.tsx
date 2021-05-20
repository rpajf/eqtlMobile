import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {NativeViewGestureHandler} from 'react-native-gesture-handler';
// import {RouteProp} from '@react-navigation/native';
// import Landing from '../screens/Landing';
// import SignIn from '../screens/SignIn';
// import {StackNavigationProp} from '@react-navigation/stack';
// type RootStackParamList = {
//   SignIn: NativeViewGestureHandler | undefined;
//   Landing: NativeViewGestureHandler | undefined;
// };
// type AuthScreenRouteProp = RouteProp<RootStackParamList, 'Landing'>;
// type AuthRouteScreenNavigationProp = StackNavigationProp<RootStackParamList>;
// interface AuthRoutesProps {
//   route: AuthScreenRouteProp;
//   navigation: AuthRouteScreenNavigationProp;
// }
import Profile from '../screens/Profile';
const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Profile" component={Profile} />

      {/* <AuthStack.Screen name="SignIn" component={SignIn} /> */}
    </AuthStack.Navigator>
  );
}

// const navigateToSignIn = useCallback(() => {
//   navigate('SignIn');
// }, [navigate]);
