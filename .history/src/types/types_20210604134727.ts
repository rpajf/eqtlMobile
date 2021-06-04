import {NavigatorScreenParams} from '@react-navigation/native';


export type UserData = {
  name: string;
  bornDate: string;
  street: string;
  state: string;
  city: string;
  cep: string;
  neighborhood: string;
};
  cpf: number;
  userAress: Adress;
};
export type BottomNavigatorParamsList = {
  Dashboard: undefined;
  Tabs: undefined;
  EventInfo: undefined;
  SignIn: undefined;
  StackNavigator: NavigatorScreenParams<StackNavigatorParamsList>;
  CreateEvent: undefined;
};

export type StackNavigatorParamsList = {
  // SignedParams: AuthData;

  EventPayment: undefined;
  AdmEvent: undefined;
  StackNavigator: undefined;
  CreateEvent: undefined;
  Profile: undefined;
};

export type RootNavigatorParamsList = {
  Home: undefined;
  StackNavigator: NavigatorScreenParams<StackNavigatorParamsList>;
  TabNavigator: NavigatorScreenParams<BottomNavigatorParamsList>;
};
