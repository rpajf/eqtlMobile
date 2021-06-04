import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

import ProfilePhoto from '../../assets/imgs/profile-pic.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {HorizontalLine} from '../../components/Line';

import Dashboard from '../../screens/DashBoard';
import {
  ProfileButton,
  ContractDataArea,
  Container,
  ProfileDivider,
  SmallText,
  UserView,
  Header,
  ButtonText,
  MediumText,
  LogoImg
} from './styles';

const Profile: React.FC = ({navigation}) => {
  // const {navigate} = useNavigation();
  return (
    <Container>
      <Header />
      <UserView>
        <Image
          source={ProfilePhoto}
          style={{
            width: 53,
            height: 52,
          }}
        />

        <SmallText>User name</SmallText>
      </UserView>
      <ProfileDivider />
      <MediumText
        style={{
          textAlign: 'left',
        }}>
        Contratos ativos
      </MediumText>

      <ContractDataArea style={styles.boxShadow}>
        <Icon name="house" size={48} color="#000" />

        <SmallText>Contrato 124123123</SmallText>
        <ProfileButton onPress={() => {}}>
          <ButtonText>Editar</ButtonText>
        </ProfileButton>
        <ProfileDivider />
        <MediumText>Endereço do contrato</MediumText>
        <SmallText
          style={{
            marginTop: 15,
            marginBottom: 20,
          }}>
          Rua 3, Casa 25 Quadra B{'\n'}
          Bairro x{'\n'}
          CEP 6454540
        </SmallText>
        <TouchableOpacity
          style={styles.navigateButton}
          onPress={() =>
            navigation.navigate('TabNavigator', {screen: 'Dashboard'})
          }>
          <ButtonText
            style={{
              color: '#6200ee',
            }}>
            Acessar
          </ButtonText>
        </TouchableOpacity>
      </ContractDataArea>
    </Container>
  );
};
const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0,
    shadowRadius: 1,

    elevation: 1,
  },
  navigateButton: {
    width: 160,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#6200ee',
    backgroundColor: '#e6e6e6',
    color: '#6200ee',
  },
  buttonText: {
    fontFamily: 'Nunito-Bold',
    color: '#6200ee',
    fontSize: 16,
    textTransform: 'uppercase',
    lineHeight: 24,
  },
});

export default Profile;
