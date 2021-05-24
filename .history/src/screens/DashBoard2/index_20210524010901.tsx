import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Line from '../../components/Line';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  Section,
} from './styles';
import api from '../../services/api';
import {SmallText} from '../SignIn/styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Header>
        <Icon name="notifications" size={24} color="#fff" />
        {/* <Icon name="search" size={24} color="#fff" /> */}
        <Icon name="menu" size={24} color="#fff" />
      </Header>
      <View style={styles.viewWrapper}>
        <SmallText>Conta atual</SmallText>
        <View style={{
          height: 10,
          width: 10,
          borderRadius: 
        }}>
        <Text style={styles.accountStatusText}>Vencida</Text>
      </View>

      <Line />
    </Container>
  );
};
const styles = StyleSheet.create({
  viewWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  accountStatusText: {
    fontFamily: 'Nunito-Black',
    color: '#1b203a',
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: '700',
    lineHeight: 24,
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

export default Dashboard;
