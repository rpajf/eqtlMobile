import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.primary};
`;
export const Regi