import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  Alert
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { BottomNavigatorParamsList } from '../../types';
import {
  ButtonText, Container, EmailInput, Header, Main, MediumText, ScreenTitleWrapper,
  SmallText, SubmitButton
} from './styles';




export interface ContractEmailProps {
  navigation: BottomTabNavigationProp<
    BottomNavigatorParamsList,
    'ContractEmail'
  >;
}
const showAlert = () =>
  Alert.alert(
    'Confirmação',
    'Fatura enviada para o email com sucesso ',
    [
      {
        text: 'Cancel',

        style: 'cancel',
      },
    ],
    {
      cancelable: true,
    },
  );

const UserContracts: React.FC<ContractEmailProps> = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <MaterialIcon name="notifications" size={24} color="#fff" />
        {/* <Icon name="search" size={24} color="#fff" /> */}
        <MaterialIcon name="menu" size={24} color="#fff" />
      </Header>
      <Main>
        <ScreenTitleWrapper>
          <MediumText style={{ alignSelf: 'flex-start' }}>
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
