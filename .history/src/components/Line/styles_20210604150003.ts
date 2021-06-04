import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize'


export const ContainerVertical = styled.View`
  /* border-left: 1px solid #cacaca; */

  margin-left: ${RFValue(20)};
  height: 90px;
  flex: 1;
  border-left-width: 1px;

  border-left-color: #626170;
`;

export const ContainerHorizontal = styled.View`
  background-color: #cacaca;
  border-color: #cacaca;

  width: 100%;
  height: 1px;
`;
