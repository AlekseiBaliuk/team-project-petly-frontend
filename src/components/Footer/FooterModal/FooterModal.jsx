import participants from '../participants/participants.json';
import { FooterModalItem } from './FooterModalItem';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import Grid from '@mui/material/Grid';
import { List } from './FooterModal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 320,
  bgcolor: 'background.paper',
  borderRadius: '40px',
  boxShadow: 24,
  p: 4,
};

export const FooterModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description" sx={{ mb: 2 }}>
          Team 9
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <List
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
          </List>
        </Typography>
      </Box>
    </Modal>
  );
};
