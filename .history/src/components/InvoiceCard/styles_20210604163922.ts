import styled from 'styled-components/native';

import {VerticalLine} from '../Line';

export const Container = styled.View`
  flex: 1;
  align-items: center;

  border-radius: 15px;

  margin: 10px;

  border: 1px solid rgba(0, 0, 0, 0.12);

  background-color: ${({theme}) => theme.colors.backgroundLight};
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Line = styled(VerticalLine)`
  margin-left: 5px;
  height: 90px;
  border-left-color: #000000;
`;

export const leftSection = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 10px;
`;

export const rightSection = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 10px;
`;


export const circle = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 10px;
`;

export const simpleSectionText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  color: #000000;
  margin-bottom: 8px;
`;

export const titleSectionText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 16px;
  color: #000000;
`;
