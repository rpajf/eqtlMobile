import React from 'react';

import {Container} from './styles';

interface LineProps {
  style: CssProps;
}

export const Line: React.FC<LineProps> = ({...rest}) => {
  return <Container {...rest} />;
};

export const HorizontalLine: React.FC<LineProps> = ({style, ...rest}) => {
  return <Container {...rest} />;
};