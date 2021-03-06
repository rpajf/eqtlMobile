import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, ButtonText} from './styles';

interface ButtonProps extends TouchableOpacityP {
  children: string;
}
const Button: React.FC<ButtonProps> = ({children, ...rest}: ButtonProps) => {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
