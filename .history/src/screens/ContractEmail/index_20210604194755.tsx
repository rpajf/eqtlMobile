import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Text,
  Alert,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {StackNavigatorParamsList} from '../../types';

import {
  Container,
  Main,
  UserContractsDivider,
  ButtonText,
  ScreenTitleWrapper,
  SmallText,
  MediumText,
  Header,
  EmailInput,
  SubmitButton,
} from './styles';
import {Value} from 'react-native-reanimated';

export interface ContractEmailProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'ContractEmail'>;
}
const showAlert = () =>
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Cancel',
        onPress: () => Alert.alert('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      emai: 'rafael@gmail.com',
      onDismiss: () => Alert.alert('Fatura enviada pro $  '),
    },
  );

const UserContracts: React.FC<ContractEmailProps> = ({navigation}) => {
  return (
    <Container>
      <Header>
        <MaterialIcon name="notifications" size={24} color="#fff" />
        {/* <Icon name="search" size={24} color="#fff" /> */}
        <MaterialIcon name="menu" size={24} color="#fff" />
      </Header>
      <Main>
        <ScreenTitleWrapper>
          <MediumText style={{alignSelf: 'flex-start'}}>
            Fatura por email
          </MediumText>
          <SmallText>
            Cadastre o seu email para o recebimento da fatura
          </SmallText>
        </ScreenTitleWrapper>
        <EmailInput
          placeholder="Digite o seu e-mail"
          placeholderTextColor="#989eb5"
        />
        <SubmitButton onPress={showAlert}>
          <ButtonText>Enviar</ButtonText>
        </SubmitButton>
      </Main>
    </Container>
  );
};

export default UserContracts;
