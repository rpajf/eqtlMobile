import React from 'react';
import {Text, Sty} from 'react-native';

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

export default UserContracts;
