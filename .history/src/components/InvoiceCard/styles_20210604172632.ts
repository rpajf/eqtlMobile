import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-items: center;

  border-radius: 15px;

  padding: 10px;

  border: 1px solid rgba(0, 0, 0, 0.12);

  background-color: ${({theme}) => theme.colors.backgroundLight};
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`;

export const Line = styled.View`
  
  border-left-width: 1px;
  border-left-color: #000000;

  align-self: center;
  width: 2px;
  height: 90px;
`;

export const leftSection = styled.View`
flex: 
  flex-direction: column;
  padding: 10px;
`;

export const rightSection = styled.View`
flex: 
  flex-direction: column;
  padding: 10px;
  align-self: flex-end;

  border-left-width: 1px;
  border-left-color: #000000;
`;

export const invoiceStatus = styled.View`
  flex-direction: row;
`;

export const circleStatus = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: #ef1111;
  margin: 8px;
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

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  letter-spacing: 1px;
  color: #6200ee;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 24px;
`;
