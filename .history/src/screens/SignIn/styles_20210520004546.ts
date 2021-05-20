import styled from 'styled-components/native';
import {Image, Text, TextInput} from 'react-native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  border-radius: 10px;
  border-width: 1px;
  border-color: #a5a6f6;
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10,
`;
