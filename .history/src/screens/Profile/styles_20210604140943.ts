import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {View} from 'react-native';

import {VerticalLine, HorizontalLine} from '../../components/Line';
import Button from '../../components/Button';

export const Container = styled(View)`
  flex: 1;
  align-items: center;
`;
export const Header = styled.View`
  height: ${RFPercentage(15)}px;
`;
export const ContractDataArea = styled.View`
  align-items: center;

  height: ${RFPercentage(60)}px;
  border-radius: 4px;

  /* border-width: 1px; */
  padding: 15px 0 15px 0;
  border-color: #c4c4c4;
  width: 290px;
  margin-top: 30px;
`;

export const ProfileDivider = styled(HorizontalLine)`
  margin-top: 15px;
  height: 2px;
`;
export const SmallText = styled.Text`
  color: ${({theme}) => theme.colors.smallText};
  font-size: 16px;
  font-family: 'Roboto-Regular';
  line-height: 18px;
`;
export const ProfileButton = styled(Button)`
  background-color: #6200ee;
  width: ${RFValue(120)}px;
  color: #fff;
  margin: 20px 0 20px 0;
`;
