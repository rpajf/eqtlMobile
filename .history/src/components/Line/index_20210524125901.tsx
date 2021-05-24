import React from 'react';
import {View} from 'react-native';
import {Container} from './styles';

interface LineProps {
  props: CssProps;
}

export const Line: React.FC<> = () => {
  return <View style={{backgroundColor: '#cacaca', height: 1}} />;
};
