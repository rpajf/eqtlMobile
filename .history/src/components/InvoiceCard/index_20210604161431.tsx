import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import { Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string | Element;
}

const InvoiceCard: React.FC = () => {
  return (
    <Container>
    </Container>
  );
};
export default InvoiceCard;
