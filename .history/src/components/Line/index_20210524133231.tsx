import React from 'react';

import {Container} from './styles';

interface LineProps {
  props: CssProps;
}
const ColoredLine = ({color}) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5,,
    }}
  />
);
export const Line: React.FC<LineProps> = ({...rest}) => {
  return <Container {...rest} />;
};
export const HorizontalLine: React.FC<LineProps> = ({...rest}) => {
  return <Container {...rest} />;
};
