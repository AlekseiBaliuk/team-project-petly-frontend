import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styles from './ModalNotice.styled';
import { ReactComponent as Close } from 'staticImages/Close.svg';
import { InfoPet } from './InfoPet/InfoPet';

const modalRoot = document.querySelector('#modal-root');

export const ModalNotice = ({ toggle }) => {
  const { ModalBackdrop, ModalContent, BtnClose } = styles;

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      toggle();
    }
  }

  const handleModalClick = e => {
    if (e.currentTarget === e.target) {
      toggle();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleModalClick}>
      <ModalContent>
        <BtnClose onClick={() => toggle()} type="button">
          <Close />
        </BtnClose>
        <InfoPet />
      </ModalContent>
    </ModalBackdrop>,
    modalRoot,
  );
};
