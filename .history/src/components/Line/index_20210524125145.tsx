import React, {HtmlHTMLAttributes} from 'react';
import {View} from 'react-native';

interface LineProps {
  style: JSX;
}

export const Line: React.FC = ({style}: LineProps) => {
  return <View style={{backgroundColor: '#cacaca', height: 1}} />;
};
