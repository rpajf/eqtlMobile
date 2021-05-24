import React from 'react';

import {Container} from './styles';

interface LineProps {
  props: CssProps;
}

export const Line: React.FC<LineProps> = ({...rest}) => {
  return <ContainerVer {...rest} />;
};
export const HorizontalLine: React.FC<LineProps> = ({...rest}) => {
  return <Container {...rest} />;
};
