import React from 'react';

import {Badge} from 'react-native-elements';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import {BottomNavigatorParamsList} from '../../types';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

import {HorizontalLine} from '../../components/Line';
//file-contract
import {
  Container,
  Header,
  DetailsButton,
  DashboardVerticalDivider,
} from './styles';
import api from '../../services/api';
import {SmallText} from '../SignIn/styles';

export interface DashboardProps {
  navigation: BottomTabNavigationProp<BottomNavigatorParamsList, 'Dashboard'>;
}

const Dashboard: React.FC<DashboardProps> = ({navigation}) => {
  return (
    <Container>
      <Header>
        <MaterialIcon name="notifications" size={24} color="#fff" />
        {/* <Icon name="search" size={24} color="#fff" /> */}
        <MaterialIcon name="menu" size={24} color="#fff" />
      </Header>
      <View style={styles.viewWrapper}>
        <SmallText>Conta atual</SmallText>
        <View style={styles.innerContent}>
          <Badge
            badgeStyle={{width: 11, height: 11, borderWidth: 1}}
            containerStyle={{position: 'absolute', top: 5, left: -15}}
            status="error"
          />
          <Text style={styles.accountInfoText}>Vencida</Text>
        </View>
      </View>
      <HorizontalLine />

      <View style={styles.userAcountDetails}>
        <View
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <SmallText>
            ReferĂȘncia{'\n'}Abr{'\n'}Vencimento - 05 abr
          </SmallText>
          <DashboardVerticalDivider />

          {/* <Line style={styles.verticalLine} /> */}

          <Text style={styles.accountInfoText}>R$150,00</Text>
        </View>

        <DetailsButton onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText}>Detalhes</Text>
        </DetailsButton>
      </View>
      <View style={styles.servicesView}>
        <Text style={styles.labelText}>ServiĂ§os - Acesso rĂĄpido</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginHorizontal: 10,

            justifyContent: 'space-between',

            // paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderColor: '#cacaca',
          }}>
          <Text style={styles.servicesText}>Solicitar religaĂ§ĂŁo</Text>
          <MaterialIcon name="battery-alert" size={24} color="black" />
        </View>
        <View
          style={{
            display: 'flex',
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',

            // paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderColor: '#cacaca',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('UserContracts')}>
            <Text style={styles.servicesText}>Contas e Pagamento</Text>
          </TouchableOpacity>
          <MaterialIcon name="credit-card" size={24} color="black" />
        </View>
        <View
          style={{
            display: 'flex',
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',

            // paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderColor: '#cacaca',
          }}>
          <Text style={styles.servicesText}>Pagar com PIX</Text>
          <Image
            source={require('../../assets/imgs/pix-icon.png')}
            style={{backgroundColor: '#0000'}}
          />
          {/* <Icon name="credit-card" size={24} color="black" /> */}
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginHorizontal: 10,

            justifyContent: 'space-between',

            // paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderColor: '#cacaca',
          }}>
          <Text style={styles.servicesText}>Dados do titular</Text>
          <MaterialIcon name="person-pin" size={24} color="black" />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginHorizontal: 10,

            justifyContent: 'space-between',

            // paddingHorizontal: 20,
            borderBottomWidth: 0.5,
            borderColor: '#2b2929',
          }}>
          <TouchableOpacity onPress={() => }>
            <Text style={styles.servicesText}>Fatura por e-mail</Text>
          </TouchableOpacity>
          <MaterialIcon name="attach-email" size={24} color="black" />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginHorizontal: 10,

            justifyContent: 'space-between',

            // paddingHorizontal: 20,
          }}>
          <Text style={styles.servicesText}>Fazer reclamaĂ§ĂŁo</Text>
          <MaterialIcon name="contact-support" size={24} color="black" />
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
    // flex: 1,
    flexDirection: 'column',
    height: 170,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#cacaca',
    borderBottomWidth: 1,
  },
  servicesView: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    // paddingHorizontal: 10,
    justifyContent: 'space-around',

    marginHorizontal: 20,
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
    lineHeight: 20,
  },
  servicesText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    lineHeight: 22,
  },
  labelText: {
    color: '#2b2c44',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 15,
  },
});

export default Dashboard;
