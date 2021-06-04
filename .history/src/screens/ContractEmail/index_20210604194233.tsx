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
  EmailInput,
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
      <Main>
        <MediumText style={{alignSelf: 'flex-start'}}>
          Fatura por email
        </MediumText>
        <SmallText>Cadastre o seu email para o recebimento da fatura</SmallText>
        <EmailInput
          placeholder="Digite o seu e-mail"
          placeholderTextColor="#989eb5"
        />
        <Su onPress={() => {}}>
          <ButtonText>Editar</ButtonText>
        </Su>
      </Main>
    </Container>
  );
};

export default UserContracts;
