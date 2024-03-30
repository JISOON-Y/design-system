import { InputHTMLAttributes } from 'react';
import * as S from './Input.style';
import { neutral, purple, red } from '../../styles/color';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'field' | 'flushed' | 'unStyled';
  borderColor?: string;
  focusBorderColor?: string;
  errorBorderColor?: string;
  error?: boolean;
}

const Input = ({
  size = 'md',
  variant = 'outline',
  borderColor = neutral['200'],
  focusBorderColor = purple['500'],
  errorBorderColor = red['500'],
  error = false,
  ...restProps
}: InputProps) => {
  const setBorderColor = (error: boolean) => {
    return error ? errorBorderColor : borderColor;
  };

  return (
    <S.InputContainer
      type={restProps.type}
      placeholder={restProps.placeholder}
      size={size}
      variant={variant}
      borderColor={setBorderColor(error)}
      focusBorderColor={focusBorderColor}
      disabled={restProps.disabled}
      readOnly={restProps.readOnly}
      error={error}
    />
  );
};

export default Input;
