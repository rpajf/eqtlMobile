import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
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
import {Value} from 'react-native-reanimated';

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
      <RadioButton.Group
        onValueChange={newValue => setValue(newValue)}
        value={value}>
        <StatusContractWrapper>
          <View style={}>
            <RadioButton value="pendente" />
            <SmallText style={{fontSize: 18}}> Pendentes</SmallText>
          </View>
        </StatusContractWrapper>
        <StatusContractWrapper>
          <RadioButton value="pagas" />
          <SmallText style={{fontSize: 18}}>Pagas</SmallText>
        </StatusContractWrapper>
        <StatusContractWrapper>
          <RadioButton value="first" />
          <SmallText style={{fontSize: 18}}>Todas</SmallText>
        </StatusContractWrapper>
      </RadioButton.Group>
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
