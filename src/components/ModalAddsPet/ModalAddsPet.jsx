import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as SC from './ModalAddsPet.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalAddsPet = ({ onClose }) => {
  const modalClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        modalClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <SC.Backdrop onClick={handleBackdropClick}>
      <SC.Content>
        <div>Test</div>
      </SC.Content>
    </SC.Backdrop>,
    modalRoot,
  );
};
