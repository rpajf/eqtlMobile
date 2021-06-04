import {NavigatorScreenParams} from '@react-navigation/native';

export type UserAdress = {
  street: string;
  state: string;
  city: string;
  cep: string;
  neighborhood: string;
  userAdressContract: number;
};

export type UserData = {
  name: string;
  bornDate: string;
  cpf: number;
  adresses: UserAdress;
};

export type BottomNavigatorParamsList = {
  Dashboard: undefined;
  Tabs: undefined;
  UserContracts: undefined;
  SignIn: undefined;
  StackNavigator: NavigatorScreenParams<StackNavigatorParamsList>;
  CreateEvent: undefined;
};

export type StackNavigatorParamsList = {
  // SignedParams: AuthData;
  SignIn: undefined;
  CreateEvent: undefined;
  Profile: undefined;
};

export type RootNavigatorParamsList = {
  Home: undefined;
  StackNavigator: NavigatorScreenParams<StackNavigatorParamsList>;
  TabNavigator: NavigatorScreenParams<BottomNavigatorParamsList>;
};
