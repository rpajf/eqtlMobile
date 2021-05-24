import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {}  from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

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
      <Header />
      <Text></Text>
    </Container>
  );
};

export default Dashboard;
