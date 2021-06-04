import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;

  border-radius: 15px;

  border: 1px solid rgba(0,0,0,0.12);

  background-color: ${({theme}) => theme.colors.backgroundLight};
`;
