import styled from 'styled-components/native';
import {Text} from 'react-native';
import Button from '../../components/Button';

export const AdressArea = styled.View`
  border-radius: 6px;
  border-width: 1px;
  border-color: #c4c4c4;
  width: 290px;
  height: 270px;
  margin-top: 30px;
`;
export const SmalText = styled.Text`
  color: #2b2c44;
  font-size: 18px;
  line-height: 18px;
`;
export const ProfileButton = styled(Button)`
  background-color: #6200ee;
  color: #fff;
  margin: 10px 0 10px 0;
`;
