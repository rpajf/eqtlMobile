import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

import ProfilePhoto from '../../assets/imgs/profile-pic.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {HorizontalLine} from '../../components/Line';
import Tabs from '../../routes/tabNav';
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

      <ContractDataArea style={styles.boxShadow}>
        <Icon name="house" size={48} color="#000" />
        <ProfileButton onPress={() => {}}>
          <ButtonText>Editar</ButtonText>
        </ProfileButton>
        <HorizontalLine
          style={{
            height: 1,
            backgroundColor: '#3f4254',
          }}
        />
        <Text style={styles.mediumText}>
          Rua 3, Casa 25 Quadra B{'\n'}
          Bairro x{'\n'}
          CEP 6454540
        </Text>
        <TouchableOpacity
          style={styles.navigateButton}
          onPress={() =>
            navigation.navigate('TabNavigator', {screen: 'Dashboard'})
          }>
          < <ButtonText>Editar</ButtonText>
        </TouchableOpacity>
      </ContractDataArea>
    </Container>
  );
};
const styles = StyleSheet.create({
  smallText: {
    fontFamily: 'Nunito-Regular',
    color: '#1b203a',
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 20,
  },
  mediumText: {
    fontFamily: 'Nunito-Regular',
    color: '#1b203a',
    fontSize: 20,
    lineHeight: 24,
  },
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
