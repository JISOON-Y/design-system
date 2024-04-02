import styled, { CSSObject } from 'styled-components';

interface ButtonContainerProps {
  color: string;
  size: CSSObject;
  variant: string;
  minSize?: { width?: number; height?: number };
}

const setBackgroundStyle = (variant: string, color: string) => {
  switch (variant) {
    case 'solid':
      return color;
    default:
      return 'none';
  }
};

const setBorderStyle = (variant: string, color: string) => {
  switch (variant) {
    case 'outline':
      return `0.125rem solid ${color}`;
    default:
      return 'none';
  }
};

const setTextStyle = (variant: string) => {
  switch (variant) {
    case 'link':
      return 'underline';
    default:
      return null;
  }
};

const setColorStyle = (variant: string, color: string) => {
  switch (variant) {
    case 'link':
      return color;
    case 'outline':
      return color;
    default:
      return 'white';
  }
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${props => props.size};

  color: ${props => setColorStyle(props.variant, props.color)};
  min-width: ${props =>
    props.minSize && props.minSize.width ? props.minSize.width : null}px;
  min-height: ${props =>
    props.minSize && props.minSize.height ? props.minSize.height : null}px;
  background: ${props => setBackgroundStyle(props.variant, props.color)};
  border: ${props => setBorderStyle(props.variant, props.color)};
  text-decoration: ${props => setTextStyle(props.variant)};

  &: disabled {
    cursor: not-allowed;
  }

  font-family: 'Pretendard-Medium';
  display: inline-block;
  cursor: pointer;
`;

// button size style
export const ButtonSizeType = {
  small: {
    fontSize: '14px',
    padding: '10px 12px',
    borderRadius: '8px',
  } as const,
  medium: {
    fontSize: '18px',
    padding: '12px 16px',
    borderRadius: '10px',
  } as const,
  large: {
    fontSize: '22px',
    padding: '14px 20px',
    borderRadius: '12px',
  } as const,
} as const;
