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
} from './styles';

const Profile: React.FC = ({navigation}) => {
  // const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={ProfilePhoto}
        style={{
          width: 53,
          height: 52,
        }}
      />

      <Text style={styles.userName}>User name</Text>
      <ProfileDivider />

      <ContractDataArea style={styles.boxShadow}>
        <Icon name="house" size={48} color="#000" />
        <ProfileButton onPress={() => {}}>Editar</ProfileButton>
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
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </ContractDataArea>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontFamily: 'Poppins-Medium',
    color: '#1b203a',
    fontSize: 22,
    lineHeight: 24,
  },
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
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
