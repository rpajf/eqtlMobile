import React from 'react';

import {Container} from './styles';
import {Divider} from 'react-native-elements';

interface LineProps {
  props: CssProps;
  color: string | null;
}

export const Line: React.FC<LineProps> = ({...rest}) => {
  return <Container {...rest} />;
};
export const HorizontalLine: React.FC<LineProps> = ({color}) => {
  return (
    <Divider
      style={{

        backgroundColor: color,
        height: 5,
      }}
    />
  );
};