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
  ContractEmail: undefined;
};

export type StackNavigatorParamsList = {
  Landing: undefined;
  SignIn: undefined;

  Profile: undefined;
};
