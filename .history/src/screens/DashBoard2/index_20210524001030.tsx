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
const ColoredLine = ({color}: any) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5,
    }}
  />
);

const Dashboard: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);

  const {navigate} = useNavigation();

  return (
    <Container>
      <Header>
        <Icon name="notifications" size={24} color="#fff" />
        {/* <Icon name="search" size={24} color="#fff" /> */}
        <Icon name="menu" size={24} color="#fff" />
      </Header>
      <ColoredLine color="red" />
    </Container>
  );
};

export default Dashboard;
