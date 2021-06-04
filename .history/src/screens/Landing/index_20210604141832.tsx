import React from 'react';
import {StyleSheet, View, Image, StatusBar, SafeAreaView} from 'react-native';
import logo from '../../assets/imgs/main-logo.png';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {RegionButton} from './styles';

export default function LandingScreen() {
  // const navigateToSignIn = useCallback(() => {
  //   navigate('SignIn');
  // }, [navigate]);`
  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={false}
        backgroundColor="#2a2e5b"
        barStyle="dark-content"
      />
      <Image
        source={require('../../assets/imgs/mainlogo.png')}
        style={{
          width: 300,
          height: 120,
          marginTop: -40,
          marginBottom: 20,
          // position: 'absolute',
          // top: 100,
        }}
      />

      <RegionButton

        onPress={() => navigate('SignIn')}>
        Alagoas
      </RegionButton>
      <RegionButton

        onPress={() => navigate('SignIn')}>
        Maranhão
      </RegionButton>
      <RegionButton >Pará</RegionButton>
      <RegionButton style={{marginBottom: 20}}>Piauí</RegionButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#2A2E5B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
