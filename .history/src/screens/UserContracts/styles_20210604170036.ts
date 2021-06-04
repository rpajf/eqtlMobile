import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Button from '../../components/Button';
import {VerticalLine, HorizontalLine} from '../../components/Line';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import {RadioButton, Text} from 'react-native-paper';


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
  height: ${RFPercentage(5)}px;
  width: 100%;
  /* padding-top: ${getStatusBarHeight() + 5}px; */
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
  font-size: 18px;
  font-family: 'Roboto-Bold';
  line-height: 18px;
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
export const StatusContractWrapper = styled.View`
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
export const ScreenTitleWrapper = styled.View``;
