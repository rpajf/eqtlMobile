import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import ProfilePhoto from '../../assets/profile-pic.png';

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
      <Text style={styles.smallText}>User name</Text>
      <AdressArea style={styles.boxShadow}>
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
    shadowColor: '#6666',
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
});

export default Profile;