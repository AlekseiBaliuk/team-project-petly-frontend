import participants from '../participants/participants.json';
import { FooterModalItem } from './FooterModalItem';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as SC from './FooterModal.styled';

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
        <Typography id="modal-modal-description" sx={{ mb: 2 }}>
          Team 9
        </Typography>
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
