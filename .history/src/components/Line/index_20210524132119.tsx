import React from 'react';

import {Container} from './styles';

interface LineProps {
  style: CssProps;
}

export const Line: React.FC<LineProps> = ({...rest}) => {
  return <Container style={style}  />;
};
