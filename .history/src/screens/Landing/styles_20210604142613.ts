import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

import Button from '../../components/Button';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.primary};
`;
export const RegionButton = styled(Button)`
  margin-top: ${RFValue(30)}px;
  width: ${RFValue(180)}px;
`;
