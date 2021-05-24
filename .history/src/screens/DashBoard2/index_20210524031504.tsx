import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Badge, withBadge} from 'react-native-elements';

import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Line from '../../components/Line';

import {Container, Header, DetailsButton} from './styles';
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
        <View style={styles.innerContent}>
          <Badge
            badgeStyle={{width: 13, height: 14}}
            containerStyle={{position: 'absolute', top: 5, left: -15}}
            status="error"
          />
          <Text style={styles.accountInfoText}>Vencida</Text>
        </View>
      </View>
      <Line />
      <View style={styles.userAcountDetails}>
        <SmallText>
          Referência{'\n'}Abr{'\n'}Vencimento - 05 abr
        </SmallText>
        <Text style={styles.accountInfoText}>R$150,00</Text>
        <DetailsButton onPress={() => {}}>
          <Text style={styles.buttonText}>Detalhes</Text>
        </DetailsButton>
      </View>
      <Line />
      <View style={styles.servicesView}>
        <SmallText>Conta atual</SmallText>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderColor: '#cacaca',
          }}>
          <Text style={styles.servicesText}>Contas e Pagamento</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderColor: '#cacaca',
          }}>
          <Text style={styles.servicesText}>Contas e Pagamento</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderColor: '#cacaca',
          }}>
          <Text style={styles.servicesText}>Contas e Pagamento</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Text style={styles.servicesText}>Contas e Pagamento</Text>
        </View>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  viewWrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 10,
  },
  innerContent: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',

    justifyContent: 'center',
    alignItems: 'center',
  },
  userAcountDetails: {
    display: 'flex',
    flexDirection: 'row',
    height: 140,

    justifyContent: 'center',
    alignItems: 'center',
  },
  servicesView: {
    display: 'flex',
    paddingHorizontal: 10,
    paddingBottom: 20,
    marginHorizontal: 30,
  },
  accountInfoText: {
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
  servicesText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    lineHeight: 22,
  },
});

export default Dashboard;
