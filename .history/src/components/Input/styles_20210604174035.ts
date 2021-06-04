import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)<>`
  /* background-color: ${({theme}) => theme.colors.purpleGray}; */
  height: ${RFValue(54)}px;
  border-radius: 8px;
  border: ${({theme}) => theme.colors.lightGray};
  font-size: ${RFValue(16)}px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.darkGray};
  text-align: left;
  padding-left: 20px;
  width: 100%;
  font-family: 'Montserrat-Medium';
  font-size: ${RFValue(14)}px;
`;