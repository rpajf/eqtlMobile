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
});

export default UserContracts;
