import { purple } from '../../styles/color';
import Button from '../Button/Button';
import React, { PropsWithChildren } from 'react';
import { useModalContext } from '../../hooks/useModalContext.hook';

export interface ModalButtonProps extends PropsWithChildren {
  customAction?: () => void;
  buttonColor?: string;
  minSize?: { width?: number; height?: number };
}

export const ModalCloseTrigger = ({ children, ...props }: ModalButtonProps) => {
  const context = useModalContext();

  const handleCloseModal = () => {
    context.setIsOpen(false);
  };

  return (
    <Button
      children={children ?? '취소'}
      variant="outline"
      size="small"
      color={props.buttonColor ?? purple['500']}
      minSize={props.minSize ?? { width: 60, height: 40 }}
      onClick={handleCloseModal}
    />
  );
};
