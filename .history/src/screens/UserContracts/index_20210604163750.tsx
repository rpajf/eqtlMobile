import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

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
  StatusContractWrapper
} from './styles';

export interface UserContractProps {
  navigation: BottomTabNavigationProp<
    BottomNavigatorParamsList,
    'UserContracts'
  >;
}
const UserContracts: React.FC<UserContractProps> = ({navigation}) => {
  return (
    <Container>
      <Header />
      <Main>
        <MediumText>Contas e Pagamento</MediumText>
        <SmallText>
          Veja o historico de suas contas ou solicite a segunda via
        </SmallText>
      </Main>
      <SmallText>asdasd</SmallText>
      <DetailsButton onPress={() => navigation.navigate('Dashboard')}>
        <ButtonText
          style={{
            color: '#6200ee',
          }}>
          Acessar
        </ButtonText>
      </DetailsButton>
      <InvoiceCard />
    </Container>
  );
};

export default UserContracts;
