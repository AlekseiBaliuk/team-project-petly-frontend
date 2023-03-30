import participants from '../../participants/participants.json';
import { FooterModalItem } from './FooterModalItem/FooterModalItem';

import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as SC from './FooterModal.styled';

const buttonStyles = {
  position: 'absolute',
  right: '10px',
  top: '10px',
};
export const FooterModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      position={'fixed'}
    >
      <SC.ModalContainer>
        <SC.ModalHeader>
          React<SC.ModalSpan>o</SC.ModalSpan>touille
        </SC.ModalHeader>
        <IconButton
          color="inherit"
          onClick={handleClose}
          sx={{ ...buttonStyles }}
        >
          <CloseIcon sx={{ fontSize: '40px' }} />
        </IconButton>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <SC.List
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {participants.map(
              ({ id, name, photo, position, part, github, linkedin }) => {
                return (
                  <FooterModalItem
                    key={id}
                    name={name}
                    photo={photo}
                    position={position}
                    part={part}
                    github={github}
                    linkedin={linkedin}
                  />
                );
              },
            )}
          </SC.List>
        </Typography>
      </SC.ModalContainer>
    </Modal>
  );
};
