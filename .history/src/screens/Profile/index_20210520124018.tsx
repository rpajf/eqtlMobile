import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import ProfilePhoto from '../../assets/profile-pic.png';

import {SmalText} from './styles';

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={ProfilePhoto}
        style={{
          width: 53,
          height: 52,

          // position: 'absolute',
          // top: 100,
        }}
      />
      <Text>User name</SmalText>
      <Text>adsad</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    fontFamily: 'Nunito-Regular',
    color: '#2b2c44',
    fontSize: 16,
    lineHeight: 18,
  },
});

export default Profile;
