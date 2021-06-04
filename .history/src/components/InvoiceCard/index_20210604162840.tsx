import React from 'react';

import * as S from './styles';

// interface ButtonProps extends TouchableOpacityProps {
//   children: string | Element;
// }

const InvoiceCard: React.FC = () => {
  return (<S.Container>
      <S.Content>
<S.leftSection>
<S.simpleSectionText>Referência</S.simpleSectionText>
<S.simpleSectionText>ABR - 2021</S.simpleSectionText>
<S.simpleSectionText>Referência</S.simpleSectionText>
<S.simpleSectionText>ABR - 2021</S.simpleSectionText>
</S.leftSection>
      </S.Content>
  </S.Container>);
};
export default InvoiceCard;
