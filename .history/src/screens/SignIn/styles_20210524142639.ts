import styled from 'styled-components/native';
import {Image, Text, TextInput, TouchableOpacity} from 'react-native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #2a2e5b; */
  background-color: #f7f7f7;
  padding: 0 32px 100px;
`;

export const ScreenTitle = styled.Text`
  font-size: 24px;
  font-family: sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  /* color: #00003444; */
  color: #ffff;
`;
export const SignButton = styled(Button)`
  background-color: #6200ee;
  color: #fff;
`;
export const Title = styled.Text`
  font-size: 24px;
  color: #6666;
  /* color: #ffff; */

  margin: 60px 0 24px;
`;
export const SmallText = styled.Text`
  color: #2b2c44;
  font-size: 16px;
  line-height: 18px;

`;
export const CpfInput = styled.TextInput`
  width: 270px;
  border-radius: 8px;
  text-align: center;
  background-color: #ffff;
`;
