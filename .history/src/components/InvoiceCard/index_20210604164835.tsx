import React from 'react';
import * as S from './styles';

import Button from '../Button';

// interface ButtonProps extends TouchableOpacityProps {
//   children: string | Element;
// }

const InvoiceCard: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.leftSection>
          <S.simpleSectionText>Referência</S.simpleSectionText>
          <S.simpleSectionText>ABR - 2021</S.simpleSectionText>
          <S.simpleSectionText>Vencimento</S.simpleSectionText>
          <S.simpleSectionText>05 ABRIL</S.simpleSectionText>
        </S.leftSection>
        <S.Line />
        <S.rightSection>
          <S.invoiceStatus>
            <S.circleStatus />
            <S.titleSectionText>VENCIDA</S.titleSectionText>
          </S.invoiceStatus>
          <S.titleSectionText>R$ 100,00</S.titleSectionText>
        </S.rightSection>
      </S.Content>
      <Button>
    </S.Container>
  );
};
export default InvoiceCard;
