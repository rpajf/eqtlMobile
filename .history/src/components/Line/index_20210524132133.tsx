import React from 'react';

import {Container} from './styles';

interface LineProps {
  style: CssProps;
}

export const Line: React.FC<LineProps> = ({style, ...rest}) => {
  return <Container style={style} {...rest} />;
};
