import React, { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, CloseBtn, Wrapp, CloseIcon } from './modal.styled';

export const modalRoot = document.getElementById("modal-root") as HTMLElement;

interface ModalProps {
  active: boolean;
  onClick: () => void;
  setActive: (active: boolean) => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ active, onClick, setActive, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setActive(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setActive]);

  return createPortal(
    <ModalBackdrop
    className={active ? 'modal active' : 'modal'}
    onClick={onClick}
  >
    <Wrapp>
      {children}
      <CloseBtn onClick={onClick}>
        <CloseIcon />
      </CloseBtn>
    </Wrapp>
  </ModalBackdrop>,
    modalRoot
  );
};