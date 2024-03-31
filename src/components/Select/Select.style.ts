import styled, { CSSObject } from 'styled-components';
import { neutral } from '../../styles/color';
import DownArrowImage from '../../assets/icon-arrow.svg';

interface SelectStyleProps {
  size: string;
  variant?: string;
  borderColor?: string;
}

export const SelectContainer = styled.div<SelectStyleProps>`
  ${({ size }) => SelectSizeType[size]};

  ${({ variant, borderColor }) =>
    variant ? SelectVariantType[variant](borderColor) : null};

  background: ${({
    variant,
  }) => `url(${DownArrowImage}) calc(100% - 16px) center ${
    variant === 'field' ? neutral['75'] : 'transparent'
  }
    no-repeat`};
  background-size: 24px;
  display: flex;
`;

export const SelectWrapper = styled.select<SelectStyleProps>`
  ${({ size }) => SelectFontType[size]};

  &:focus {
    outline: 0 none;
  }

  width: calc(100% - 24px);
  border: none;
  appearance: none;
  background: transparent;
  font-family: 'Pretendard-Regular';
`;

// select size style
export const SelectSizeType: CSSObject = {
  sm: {
    padding: '8.75px 10px',
    borderRadius: '6px',
    border: '1.5px solid',
  } as const,
  md: {
    padding: '13.5px 12px',
    borderRadius: '8px',
    border: '1.75px solid',
  } as const,
  lg: {
    padding: '16.5px 14px',
    borderRadius: '10px',
    border: '2px solid',
  } as const,
} as const;

// select font size style
export const SelectFontType: CSSObject = {
  sm: {
    fontSize: '13px',
  } as const,
  md: {
    fontSize: '15px',
  } as const,
  lg: {
    fontSize: '16px',
  } as const,
} as const;

// select variant style
export const SelectVariantType: Record<
  string,
  (borderColor?: string) => CSSObject
> = {
  outline: borderColor => ({
    borderColor: borderColor,
  }),
  field: borderColor => ({
    backgroundColor: `${neutral['75']}`,
    border: 'none',
  }),
  flushed: borderColor => ({
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: `1.75px solid ${borderColor}`,
    borderRadius: '0',
  }),
  unStyled: () => ({
    backgroundColor: 'none',
    border: 'none',
  }),
};
