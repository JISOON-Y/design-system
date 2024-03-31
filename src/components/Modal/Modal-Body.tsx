import React, { PropsWithChildren } from 'react';
import * as S from './Modal.style';

export const ModalBody = ({ children }: PropsWithChildren) => {
  return <S.ModalBody>{children}</S.ModalBody>;
};
