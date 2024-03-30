import * as S from './Button.style';
import { ButtonSizeType } from './Button.style';
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  variant: 'solid' | 'outline' | 'link';
  size: 'small' | 'medium' | 'large';
  color: string;
  minSize?: { width?: number; height?: number };
}

const Button = ({
  variant,
  size,
  color,
  minSize,
  children,
  type,
  disabled,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  const sizeStyle = ButtonSizeType[size];

  return (
    <S.ButtonContainer
      type={type}
      color={color}
      size={sizeStyle}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      minSize={minSize}
    >
      {children}
    </S.ButtonContainer>
  );
};

export default Button;
