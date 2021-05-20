import styled from 'styled-components';
import {TouchableOpacity, Text} from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 180px;
  height: 44px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #a5a6f6;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled(Text)`
  font-family: 'Nunito-Bold';
  font-weight: 600;
  color: #ffff;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;
