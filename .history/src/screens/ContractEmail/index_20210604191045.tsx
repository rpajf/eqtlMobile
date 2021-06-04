import React from 'react';
import {StyleSheet, TouchableOpacity, View, FlatList, Text} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {BottomNavigatorParamsList} from '../../types';

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

export interface ContractEmailProps {
  navigation: BottomTabNavigationProp<
    BottomNavigatorParamsList,
    'UserContracts'
  >;
}

const UserContracts: React.FC<ContractEmailProps> = ({navigation}) => {
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
