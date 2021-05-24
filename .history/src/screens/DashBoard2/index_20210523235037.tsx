import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  Section,
} from './styles';
import api from '../../services/api';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);

  const {navigate} = useNavigation();

  return (
    <Container>
      <Header>
        <Icon name="house" size={24} color="#000" />
      </Header>
    </Container>
  );
};

export default Dashboard;
