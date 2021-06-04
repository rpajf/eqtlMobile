import React from 'react';
import {} from 'react-native'
import * as S from './styles';

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
          <View>
            <S.CircleStatus />
          </View>
        </S.rightSection>
      </S.Content>
    </S.Container>
  );
};
export default InvoiceCard;
