import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {FlatList} from 'react-native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
`;
export const Section = styled.View`
  width: fit-content;
  border-width: 1px;
  height: 190px;
  border-color: #666;
`;
export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #2a2e5b;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
`;

export const ProfileButton = styled.TouchableOpacity``;

export const SmalText = styled.Text`
  color: #2b2c44;
  font-size: 18px;
  line-height: 18px;
`;
export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;
