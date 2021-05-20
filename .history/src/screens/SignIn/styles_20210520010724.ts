import styled from 'styled-components/native';
import {Image, Text, TextInput} from 'react-native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2a2e5b;
  padding: 0 32px 100px;
`;

export const ScreenTitle = styled.Text`
  font-size: 24px;
  font-family: sans-serif;
  /* color: #00003444; */
  color: #ffff;
`;
export const Title = styled.Text`
  font-size: 24px;
  /* color: #6666; */
  color: #ffff;

  margin: 60px 0 24px;
`;
export const SmallText = styled.Tou
export const CpfInput = styled.TextInput`
  width: 270px;
  border-radius: 8px;
  text-align: center;
  background-color: #ffff;
`;
