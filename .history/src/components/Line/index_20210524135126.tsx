import React from 'react';

import {ContainerVertical, ContainerHorizontal} from './styles';

// interface LineProps {
//   props: CssProps;
// }

export const Line: React.FC = () => {
  return <ContainerVertical />;
};
export const HorizontalLine: React.FC<LineProps> = () => {
  return <ContainerHorizontal />;
};
