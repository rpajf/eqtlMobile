import React from 'react';

import {ContainerVertical, ContainerHorizontal} from './styles';

interface LineProps {
  props: CssProps;
}

export const VerticalLine: React.FC<LineProps> = () => {
  return <ContainerVertical />;
};
export const HorizontalLine: React.FC<LineProps> = () => {
  return <ContainerHorizontal />;
};
