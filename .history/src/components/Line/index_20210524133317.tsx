import React from 'react';

import {Container} from './styles';

interface LineProps {
  props: CssProps;
}

export const Line: React.FC<LineProps> = ({...rest}) => {
  return <Container {...rest} />;
};
export const HorizontalLine: React.FC<LineProps> = ({color}) => {
  return (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 5,
      }}
    />
  );
};