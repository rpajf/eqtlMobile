import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Image, Text, TextInput, TouchableOpacity} from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';
import {VerticalLine, HorizontalLine} from '../../components/Line';

export const Container = styled.View`
  flex: 1;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.backgroundLight};
  padding: 0 32px 100px;
  position: relative;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: ${RFPercentage(15)}px;
`;
export const LogoDark = styled.Image`
  width: ${RFValue(180)}px;
  height: ${RFValue(60)}px;
  border-radius: 12px;
  position: absolute;
  top: 1px;
  left: 1px;
`;

export const SignWrapper = styled.View`
  align-items: center;
  justify-content: space-around;
  width: ${RFPercentage(45)}px;
  height: ${RFPercentage(65)}px;
`;

export const ScreenTitle = styled.Text`
  font-size: 22px;
  line-height: 26px;
  font-family: 'Poppins-Medium';
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  margin-bottom: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.mainText};
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
  color: ${({theme}) => theme.colors.smallText};
  font-size: 16px;
  font-family: 'Poppins-Regular';
  line-height: 18px;
`;
export const SignInDivider = styled(HorizontalLine)`
  margin-top: 15px;
  height: 2px;
`;
export const CpfInput = styled(Input)`
  width: ${RFValue(270)}px;
  border-radius: 8px;
  text-align: center;
  color: #000;
  background-color: #ffff;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.lightGray};
`;
export const FooterWraper = styled.View`
  margin-top: ${RFPercentage(5)}px;
  align-items: center;
  justify-content: space-around;
  width: ${RFPercentage(45)}px;
  height: ${RFPercentage(15)}px;
`;
