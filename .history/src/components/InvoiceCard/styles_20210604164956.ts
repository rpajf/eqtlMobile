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

export const invoiceStatus = styled.View`
  flex-direction: row;
`;

export const circleStatus = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: #ef1111;
  m
`;

export const simpleSectionText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  color: #000000;
  margin-bottom: 8px;
`;

export const titleSectionText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  color: #000000;
`;

export const invoiceStatusText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 16px;
  color: #000000;
`;
