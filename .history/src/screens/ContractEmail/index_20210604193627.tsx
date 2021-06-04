import React from 'react';
import {StyleSheet, TouchableOpacity, View, FlatList, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {StackNavigatorParamsList} from '../../types';

import {
  Container,
  Main,
  UserContractsDivider,
  ButtonText,
  SmallText,
  MediumText,
  Header,
  DetailsButton,
} from './styles';
import {Value} from 'react-native-reanimated';

export interface ContractEmailProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'ContractEmail'>;
}

const UserContracts: React.FC<ContractEmailProps> = ({navigation}) => {
  return (
    <Container>
      <Header>
        <MaterialIcon name="notifications" size={24} color="#fff" />
        {/* <Icon name="search" size={24} color="#fff" /> */}
        <MaterialIcon name="menu" size={24} color="#fff" />
      </Header>
      <Main
    </Container>
  );
};

export default UserContracts;
