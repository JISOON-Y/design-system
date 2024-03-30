import React from 'react';
import { PickCSSProperties } from '../Flex/Flex';

interface BoxProps
  extends PickCSSProperties<
    'width' | 'height' | 'borderRadius' | 'backgroundColor'
  > {}

const Box = ({ ...boxProps }: BoxProps) => {
  const style = {
    display: 'block',
    color: 'white',
    ...boxProps,
  };
  return <div style={style} />;
};

export default Box;
