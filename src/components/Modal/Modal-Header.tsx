import React, { PropsWithChildren } from 'react';
import * as S from './Modal.style';

export const ModalHeader = ({ children }: PropsWithChildren) => {
  return <S.ModalHeader>{children}</S.ModalHeader>;
};
