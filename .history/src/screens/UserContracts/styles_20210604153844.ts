import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Button from '../../components/Button';
import {VerticalLine, HorizontalLine} from '../../components/Line';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${({theme}) => theme.colors.backgroundLight};
`;
export const Main = styled.View`
  height: ${RFPercentage(25)}px;
`;
export const Header = styled.View`
  height: ${RFPercentage(10)}px;
  padding-top: ${getStatusBarHeight() + 5}px;
  background: #2a2e5b;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const SmallText = styled.Text`
  color: ${({theme}) => theme.colors.smallText};
  font-size: 16px;
  font-family: 'Roboto-Regular';
  line-height: 18px;
`;
export const SignInDivider = styled(HorizontalLine)`
  margin-top: 15px;
  height: 2px;
`;