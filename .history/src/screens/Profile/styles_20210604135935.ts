import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {View} from 'react-native';

import {VerticalLine, HorizontalLine} from '../../components/Line';
import Button from '../../components/Button';




export const Container = styled(View)`
  flex: 1;
  align-items: center;
`;

export const AdressArea = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 270px;
  border-radius: 4px;

  /* border-width: 1px; */
  padding: 15px 0 15px 0;
  border-color: #c4c4c4;
  width: 290px;
  margin-top: 30px;
`;
export const SmalText = styled.Text`
  color: #2b2c44;
  font-size: 18px;
  line-height: 18px;
`;
export const ProfileButton = styled(Button)`
  background-color: #6200ee;
  width: 160px;
  color: #fff;
  margin: 20px 0 20px 0;
`;
