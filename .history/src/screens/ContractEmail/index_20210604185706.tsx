import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, FlatList, Text} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


import {BottomNavigatorParamsList} from '../../types';

import InvoiceCard from '../../components/InvoiceCard';

import {
  Container,
  Main,
  UserContractsDivider,
  ButtonText,
  SmallText,
  MediumText,
  Header,
  DetailsButton,
  ScreenTitleWrapper,
  StatusContractWrapper,
} from './styles';
import {Value} from 'react-native-reanimated';

export interface UserContractProps {
  navigation: BottomTabNavigationProp<
    BottomNavigatorParamsList,
    'UserContracts'
  >;
}

const invoices = [
  {
    id: 1,
    referencia: 'ABR - 2021',
    vencimento: '05/ABRIL',
    status: 'VENCIDA',
    valor: '100,00',
  },
  {
    id: 2,
    referencia: 'MAI - 2021',
    vencimento: '05/MAIO',
    status: 'VENCIDA',
    valor: '205,00',
  },
  {
    id: 3,
    referencia: 'JUN - 2021',
    vencimento: '05/JUN',
    status: 'ABERTO',
    valor: '100,00',
  },
];

const UserContracts: React.FC<UserContractProps> = ({navigation}) => {
  const [value, setValue] = React.useState('todos');

  return (
    <Container>
      <Header>
        <MaterialIcon name="notifications" size={24} color="#fff" />
        {/* <Icon name="search" size={24} color="#fff" /> */}
        <MaterialIcon name="menu" size={24} color="#fff" />
      </Header>
    </Container>
  );
};

export default UserContracts;
