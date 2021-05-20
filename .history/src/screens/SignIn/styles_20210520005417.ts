import styled from 'styled-components/native';
import {Image, Text, TextInput} from 'react-native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backgroundColor: '#2A2E5B',

  padding: 0 32px 100px;
`;

export const ScreenTitle = styled.Text`
  font-size: 24px;
  font-family: sans-serif;
  color: #00003444;
`;
export const Title = styled.Text`
  font-size: 24px;
  color: #6666;

  margin: 60px 0 24px;
`;

export const CpfInput = styled.TextInput`
  border-radius: 50px;
  background-color: #ffff;
  /* border-width: 1px; */
  /* border-color: #a5a6f6; */
`;
