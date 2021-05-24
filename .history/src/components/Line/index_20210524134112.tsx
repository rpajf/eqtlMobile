import React from 'react';

import {ContainerVertical, ContainerHorizontal} from './styles';

interface LineProps {
  props: CssProps;
}

export const Line: React.FC<LineProps> = ({...rest}) => {
  return <ContainerVertical {...rest} />;
};
export const HorizontalLine: React.FC<LineProps> = ({...rest}) => {
  return <ContainerHorizontal {...rest} />;
};
