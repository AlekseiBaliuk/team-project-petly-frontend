import team from '../footerData/team.json';
import { FooterModalItem } from './FooterModalItem';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
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
          <ul>
            {team.map(({ name, photo, position, part, github, linkedin }) => {
              return (
                <FooterModalItem
                  key={name}
                  name={name}
                  photo={photo}
                  position={position}
                  part={part}
                  github={github}
                  linkedin={linkedin}
                />
              );
            })}
          </ul>
        </Typography>
      </Box>
    </Modal>
  );
};
