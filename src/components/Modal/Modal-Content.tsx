import { PropsWithChildren, useEffect, useRef } from 'react';
import * as S from './Modal.style';
import { useModalContext } from '../../hooks/useModalContext.hook';

export interface ModalContentProps extends PropsWithChildren {
  backgroundColor?: string;
}

export const ModalContent = ({
  children,
  backgroundColor,
}: ModalContentProps) => {
  const context = useModalContext();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outsideClickModal = (event: MouseEvent) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        context.setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', outsideClickModal);

    return () => {
      document.removeEventListener('mousedown', outsideClickModal);
    };
  }, []);

  return (
    <S.ModalWrapper ref={modalRef} backgroundColor={backgroundColor}>
      {' '}
      {children}
    </S.ModalWrapper>
  );
};
