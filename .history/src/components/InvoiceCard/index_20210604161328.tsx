import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Container, ButtonText} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string | Element;
}
const InvoiceCard: React.FC = ({children, ...rest}: ButtonProps) => {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};
export default InvoiceCard;
