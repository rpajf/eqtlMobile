import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {Container} from './styles';

const UserContracts: React.FC = () => {
  return (
    <Container>
      <Text>asdasd</Text>
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

export default UserContracts;
