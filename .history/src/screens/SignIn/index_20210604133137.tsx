import React from 'react';
import {Image, StyleSheet, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

// import logo from '../../assets/imgs/.png';
import {useAuth} from '../../context/auth';
import {
  Container,
  LogoDark,
  ScreenTitle,
  CpfInput,
  SignButton,
  SmallText,
  SignWrapper,
  SignInDivider,
  FooterWraper,
} from './styles';
import {VerticalLine, HorizontalLine} from '../../components/Line';

const SignIn: React.FC = () => {
  const {navigate} = useNavigation();

  // const {signIn} = useAuth();

  // function handleSign() {
  //   signIn();
  // }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        hidden={true}
        backgroundColor="#f7f7f7"
        translucent={true}
      />
      {/* <LogoDark source={require('../../assets/imgs/profile.png')} /> */}
      <SignWrapper>
        <ScreenTitle>Área do usuário</ScreenTitle>
        <CpfInput
          keyboardType="numeric"
          placeholder="Digite o seu cpf"
          placeholderTextColor="#989eb5"
        />
        <SignButton onPress={() => navigate('Profile')}>Entrar</SignButton>
        <SignInDivider />
        <SmallText>Deseja solicitar uma nova ligação?</SmallText>
        {/* <Divider style={{backgroundColor: '#fff'}} />; */}
        <SignButton onPress={() => {}}>Solicitar</SignButton>
        <FooterWraper
        <SmallText>Duvidas? Entre em contato</SmallText>
        </FooterWraper>
      </SignWrapper>
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
