import React from 'react';
import * as S from './styles';

import Button from '../Button';

export interface InvoiceProps {
  referencia: string;
  vencimento: string;
  status: string;
  valor: string;
}

const InvoiceCard: React.FC<InvoiceProps> = ({referencia, vencimento, status, valor, }: InvoiceProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.leftSection>
          <S.simpleSectionText>ReferĂȘncia</S.simpleSectionText>
          <S.simpleSectionText>{referencia.toUpperCase()}</S.simpleSectionText>
          <S.simpleSectionText>Vencimento</S.simpleSectionText>
          <S.simpleSectionText>{vencimento.toUpperCase()}</S.simpleSectionText>
        </S.leftSection>
        <S.Line />
        <S.rightSection>
          <S.invoiceStatus>
            <S.circleStatus />
            <S.invoiceStatusText>{status.toUpperCase()}</S.invoiceStatusText>
          </S.invoiceStatus>
          <S.titleSectionText>R$ 100,00</S.titleSectionText>
        </S.rightSection>
      </S.Content>
      <Button>
        <S.ButtonText>Detalhes</S.ButtonText>
      </Button>
    </S.Container>
  );
};
export default InvoiceCard;
