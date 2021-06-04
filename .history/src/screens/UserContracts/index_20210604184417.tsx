import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, FlatList} from 'react-native';
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
      <Header >       <MaterialIcon name="notifications" size={24} color="#fff" />
        {/* <Icon name="search" size={24} color="#fff" /> */}
        <MaterialIcon name="menu" size={24} color="#fff" /></Header>
      <Main>
        <ScreenTitleWrapper>
          <MediumText style={{alignSelf: 'flex-start'}}>
            Contas e Pagamento
          </MediumText>
          <SmallText>
            Veja o historico de suas contas ou solicite a segunda via
          </SmallText>
        </ScreenTitleWrapper>
      </Main>
      <StatusContractWrapper
        onValueChange={newValue => setValue(newValue)}
        value={value}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioButton value="pendente" />
            <SmallText style={{fontSize: 16, marginLeft: -5}}>
              Pendentes
            </SmallText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioButton value="pago" />
            <SmallText style={{fontSize: 16, marginLeft: -5}}>Pagos</SmallText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioButton value="todos" />
            <SmallText style={{fontSize: 16, marginLeft: -5}}>Todos</SmallText>
          </View>
        </View>
      </StatusContractWrapper>
      <DetailsButton onPress={() => navigation.navigate('Dashboard')}>
        <ButtonText
          style={{
            color: '#6200ee',
          }}>
          Historico
        </ButtonText>
      </DetailsButton>
      <FlatList
        data={invoices}
        renderItem={({item}) => (
          <InvoiceCard
            referencia={item.referencia}
            vencimento={item.vencimento}
            status={item.status}
            valor={item.valor}
          />
        )}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default UserContracts;
