import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import {VerticalLine, HorizontalLine} from '../../components/Line';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import {RadioButton} from 'react-native-paper';

import Button from '../../components/Button';
import Input from '../../components/Input';

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${({theme}) => theme.colors.backgroundLight};
`;

export const Main = styled.View`
  padding: ${RFValue(15)}px;
  height: ${RFPercentage(25)}px;
`;
export const Header = styled.View`
  padding: 0 20px 20px 20px;
  padding-top: ${getStatusBarHeight() + 5}px;
  width: 100%;
  flex-direction: row;

  background-color: ${({theme}) => theme.colors.primary};

  justify-content: space-between;
  align-items: center;
`;
export const SmallText = styled.Text`
  color: ${({theme}) => theme.colors.smallText};
  font-size: 16px;
  font-family: 'Roboto-Regular';
  line-height: 18px;
`;
export const MediumText = styled.Text`
  color: ${({theme}) => theme.colors.smallText};
  font-size: 20px;
  font-family: 'Roboto-Medium';
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.4px;
`;
export const UserContractsDivider = styled(HorizontalLine)`
  margin-top: 15px;
  height: 2px;
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
export const SubmitButton = styled(Button)`
  background-color: #6200ee;
  width: ${RFValue(260)}px;
  color: #fff;
  align-self: center;
  font-size: 16px;
  margin: 20px 0 20px 0;
`;
export const StatusContractWrapper = styled(RadioButton.Group)`
  display: flex;
  width: ${RFPercentage(40)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const DetailsButton = styled(Button)`
  background-color: ${({theme}) => theme.colors.backgroundLight};
  width: ${RFValue(160)}px;
  color: ${({theme}) => theme.colors.buttonFilled};
  font-size: 16px;

  margin: 20px 0 20px 0;
`;
export const ScreenTitleWrapper = styled.View`
  height: ${RFPercentage(15)}px;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
`;
export const EmailInput = styled(Input)`
  width: ${RFValue(270)}px;
  border-radius: 8px;
  text-align: center;
  color: #000;
  align-self: center;
  background-color: #ffff;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.lightGray};
`;
