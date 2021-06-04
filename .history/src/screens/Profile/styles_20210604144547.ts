import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {View, Text} from 'react-native';

import {VerticalLine, HorizontalLine} from '../../components/Line';
import Button from '../../components/Button';

export const Container = styled(View)`
  flex: 1;
  align-items: center;
`;
export const Header = styled.View`
  height: ${RFPercentage(12.5)}px;
`;

export const UserView = styled.View`
  height: ${RFPercentage(15)}px;
  align-items: center;
  justify-content: space-between;
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
  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(20)}px;
  height: 2px;
  align-self: center;
`;
export const SmallText = styled.Text`
  color: ${({theme}) => theme.colors.smallText};
  font-size: 16px;
  font-family: 'Roboto-Regular';
  line-height: 18px;
  text-align: center;
`;
export const MediumText = styled.Text`
  color: ${({theme}) => theme.colors.smallText};
  font-size: 18px;
  font-family: 'Roboto-Bold';
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.4px;
`;
export const ProfileButton = styled(Button)`
  background-color: #6200ee;
  width: ${RFValue(160)}px;
  color: #fff;
  font-size: 16px;
  margin: 20px 0 20px 0;
`;
export const NavButton = styled(Button)`
  background-color: #6200ee;
  width: ${RFValue(160)}px;
  color: #fff;
  margin: 20px 0 20px 0;
`;
export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  letter-spacing: 1px;
  color: #ffff;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 24px;
`;
