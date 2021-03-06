import React from 'react';
import {TouchableOpacityPro} from 'react-native-gesture-handler';

import {Container, ButtonText} from './styles';

interface ButtonProps extends TouchableOpacity {
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
