import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RadioButton, Text} from 'react-native-paper';
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

export interface UserContractProps {
  navigation: BottomTabNavigationProp<
    BottomNavigatorParamsList,
    'UserContracts'
  >;
}
const UserContracts: React.FC<UserContractProps> = ({navigation}) => {
  const [value, setValue] = React.useState('first');

  return (
    <Container>
      <Header />
      <Main>
        <MediumText style={{alignSelf: 'flex-start'}}>
          Contas e Pagamento
        </MediumText>
        <SmallText>
          Veja o historico de suas contas ou solicite a segunda via
        </SmallText>
      </Main>

      <StatusContractWrapper>
        <SmallText>
          Pendentts
        </SmallText>
        <RadioButton value="first" />
      </StatusContractWrapper>
      <StatusContractWrapper>
        <SmallText>
          Veja o historico de suas contas ou solicite a segunda via
        </SmallText>
        <RadioButton value="first" />
      </StatusContractWrapper>
      <StatusContractWrapper>
        <SmallText>
          Veja o historico de suas contas ou solicite a segunda via
        </SmallText>
        <RadioButton value="first" />
      </StatusContractWrapper>
      <DetailsButton onPress={() => navigation.navigate('Dashboard')}>
        <ButtonText
          style={{
            color: '#6200ee',
          }}>
          Historico
        </ButtonText>
      </DetailsButton>
      <InvoiceCard />
    </Container>
  );
};

export default UserContracts;