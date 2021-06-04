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
  height: ${RFPercentage(55)}px;
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
  color: #2b2c44;
  font-size: 16px;
  line-height: 18px;
`;
export const SignInDivider = styled(HorizontalLine)`
  height: 1.75px;
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
  margin-top: ${RFPercentage(14)}px;
  align-items: center;
  justify-content: center;
  width: ${RFPercentage(45)}px;
  height: ${RFPercentage(15)}px;
`;
