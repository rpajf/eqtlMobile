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

  UserContracts: undefined;
  SignIn: undefined;
  StackNavigator: NavigatorScreenParams<StackNavigatorParamsList>;

  ContractEmail: undefined;
};

export type StackNavigatorParamsList = {
  Landing: undefined;
  SignIn: undefined;

  Profile: undefined;
};
