import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import {BottomNavigatorParamsList} from '../../types';

import InvoiceCard from '../../components/InvoiceCard/';}

import {
  Container,
  Main,
  UserContractsDivider,

  ButtonText,
  SmallText,
  MediumText,
  Header,
} from './styles';

export interface UserContractProps {
  navigation: BottomTabNavigationProp<
    BottomNavigatorParamsList,
    'UserContracts'
  >;
}
const UserContracts: React.FC<UserContractProps> = ({navigation}) => {
  return (
    <Container>
      <Header />
      <Main>
        
      </Main>
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
      <InvoiceCard/>
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
