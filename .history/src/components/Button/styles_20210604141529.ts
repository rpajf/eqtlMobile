import styled from 'styled-components';
import {TouchableOpacity, Text} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  width: ${RFValue(180)}px;
  height: ${RFValue(180)}px;
  border-radius: 6px;
  border-width: 1px;
  border-color: #a5a6f6;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled(Text)`
  font-family: 'Roboto-Medium';
  letter-spacing: 1px;
  color: #ffff;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;

  text-transform: uppercase;
`;
