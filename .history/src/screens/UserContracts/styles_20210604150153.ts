import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Button from '../../components/Button';
import {VerticalLine, HorizontalLine} from '../../components/Line';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;
export const Section = styled.View`
  width: fit-content;
  border-width: 1px;
  height: 190px;
  border-color: #666;
`;
export const Header = styled.View`
  padding: 0 20px 20px 20px;
  padding-top: ${getStatusBarHeight() + 5}px;
  background: #2a2e5b;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
