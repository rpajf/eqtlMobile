import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const ContainerVertical = styled.View`
  margin-left: ${RFValue(20)}px;
  height: 90px;

  border-left-width: 1px;

  border-left-color: #626170;
`;

export const ContainerHorizontal = styled.View`
  background-color: #cacaca;
  border-color: #cacaca;

  width: 100%;
  height: 1px;
`;
