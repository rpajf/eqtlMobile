import React from 'react';
import {Image, StyleSheet, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import logo from '../../assets/imgs/medium-logo.png';
import {useAuth} from '../../context/auth';
import {
  Container,
  Title,
  LogoDark,
  ScreenTitle,
  CpfInput,
  SignButton,
  SmallText,
} from './styles';

interface TouchableOpacityProps extends TouchableOpacity {
  onPress(): () => void;

  children: string;
}

const SignIn: React.FC<TouchableOpacityProps> = ({
  onPress,
  children,
  ...rest
}: TouchableOpacityProps) => {
  const {navigate} = useNavigation();

  // const {signIn} = useAuth();

  // function handleSign() {
  //   signIn();
  // }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#f7f7f7"
        translucent={true}
      />
      <LogoDark
        source={logo}
        style={{
          width: 135,
          height: 45,
          marginTop: -50,
          marginBottom: 20,
          backgroundColor: '#292E5B',
        }}
      />
      <ScreenTitle>Área do usuário</ScreenTitle>
      <CpfInput
        keyboardType="numeric"
        placeholder="Digite seu cpf"
        style={styles.inputShadow}
      />
      <SignButton onPress={() => navigate('Profile')}>Entrar</SignButton>
      <SmallText style={{color: '#000'}}>sdasd</SmallText>
      {/* <Divider style={{backgroundColor: '#fff'}} />; */}
      <SignButton onPress={() => {}}>Solicitar</SignButton>
      <SmallText style={{color: '#000'}}>Duvidas? Entre em contato</SmallText>
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
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10,
  },
});
export default SignIn;
