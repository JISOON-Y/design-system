import React from 'react';
import * as S from './Modal.style';
import { useModalContext } from '../../hooks/useModalContext.hook';

export const ModalBackdrop = () => {
  const context = useModalContext();

  return <>{context.isOpen && <S.ModalBackdrop />}</>;
};
