import React, {HtmlHTMLAttributes} from 'react';
import {View} from 'react-native';

interface LineProps {
  style: HtmlHTMLAttributes;
}

export const Line: React.FC = ({}) => {
  return <View style={{backgroundColor: '#cacaca', height: 1}} />;
};
