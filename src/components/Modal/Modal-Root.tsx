import React, { createContext, PropsWithChildren } from 'react';

export interface ModalRootProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const ModalContext = createContext<ModalRootProps | null>(null);

export const ModalRoot = ({
  children,
  ...props
}: PropsWithChildren<ModalRootProps>) => {
  return (
    <ModalContext.Provider value={{ ...props }}>
      {props.isOpen && <>{children}</>}
    </ModalContext.Provider>
  );
};
