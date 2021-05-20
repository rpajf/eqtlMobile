import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import ProfilePhoto from '../../assets/profile-pic.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {ProfileButton, AdressArea} from './styles';

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={ProfilePhoto}
        style={{
          width: 53,
          height: 52,

          // position: 'absolute',
          // top: 100,
        }}
      />
      <ProfileButton onPress={() => {}}>Perfil</ProfileButton>
      <Text style={styles.smallText}>Olá, User name</Text>
      <AdressArea style={styles.boxShadow}>
        <Icon name="house" size={24} color="#000" />
        <ProfileButton onPress={() => {}}>Editar</ProfileButton>

        <Text style={styles.mediumText}>
          Rua 3, Casa 25 Quadra B{'\n'}
          Bairro x{'\n'}
          CEP 6454540
        </Text>
      </AdressArea>
    </View>
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
  navigateButton:{
    width: 115,
    height: 24;
    borderWidth: 1,
    borderColor: '#6200ee'


  }
});

export default Profile;
