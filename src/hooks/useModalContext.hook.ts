import { useContext } from 'react';
import { ModalContext } from '../components/Modal/Modal-Root';

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('context is undefined');
  }

  return context;
};
