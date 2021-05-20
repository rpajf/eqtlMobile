import React from 'react';
import {Image, StyleSheet} from 'react-native';

import Button from '../../components/Button';
import logo from '../../assets/medium-logo.png';
import {useAuth} from '../../context/auth';
import {Container, Title, ScreenTitle, CpfInput} from './styles';

const SignIn: React.FC = () => {
  // const {signIn} = useAuth();

  // function handleSign() {
  //   signIn();
  // }

  return (
    <Container>
      <Image
        source={logo}
        style={{width: 135, height: 45, marginTop: -50, marginBottom: 20}}
      />
      <ScreenTitle>Área do usuário</ScreenTitle>
      <CpfInput keyboardType="" placeholder="Digite seu cpf" style={styles.inputShadow}  />

      <Button>Entrar</Button>

      <Title>Faça seu logon</Title>
    </Container>
  );
};
const styles = StyleSheet.create({
  inputShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
export default SignIn;
