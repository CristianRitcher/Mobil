import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconSymbolProps {
  size?: number;
  color?: string;
  name?: string;  // Puedes usarlo para cambiar el icono, o ignorar
  style?: object;
}

export function IconSymbol({ size = 24, color = '#00cba9', style }: IconSymbolProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={style}
    >
      <Path d="M12 2L15 8H9L12 2Z" fill={color} />
      <Path d="M12 22L9 16H15L12 22Z" fill={color} />
      <Path d="M2 12L8 15V9L2 12Z" fill={color} />
      <Path d="M22 12L16 9V15L22 12Z" fill={color} />
    </Svg>
  );
}