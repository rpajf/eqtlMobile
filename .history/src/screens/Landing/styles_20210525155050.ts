import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
`;
