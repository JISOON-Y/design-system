import { styled } from 'styled-components';
import { white } from '../../styles/color';

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 360px;
  min-height: 340px;
  max-width: 840px;
  max-height: 820px;
  border-radius: 16px;
  padding: 50px 40px 30px 40px;
  gap: 12px;
  background-color: ${props => props.backgroundColor ?? `${white}`};
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalHeader = styled.h1`
  font-size: 22px;
  font-family: 'Pretendard-SemiBold';
  margin: 0;
`;

export const ModalBody = styled.p`
  flex: 1;
  width: 100%;
  font-size: 14px;
  padding: 0 0 6px 0;
  font-family: 'Pretendard-Regular';
  margin: 0;
`;
