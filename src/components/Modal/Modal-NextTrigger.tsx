import { purple } from '../../styles/color';
import Button from '../Button/Button';
import React from 'react';
import { useModalContext } from '../../hooks/useModalContext.hook';
import { ModalButtonProps } from './Modal-CloseTrigger';

export const ModalNextTrigger = ({ children, ...props }: ModalButtonProps) => {
  const context = useModalContext();

  const handleSubmitModal = () => {
    // 기능 수행 후 모달창 닫기
    if (props.customAction) {
      props.customAction();
    }
    context.setIsOpen(false);
  };

  return (
    <Button
      children={children ?? '저장'}
      variant="solid"
      size="small"
      color={props.buttonColor ?? purple['500']}
      minSize={props.minSize ?? { width: 60, height: 40 }}
      onClick={handleSubmitModal}
    />
  );
};
