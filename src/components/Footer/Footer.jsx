import { useState } from 'react';
import { Container } from 'components/Container/Container.styled';
import { FooterModal } from '../FooterModal/FooterModal';
import PetsIcon from '@mui/icons-material/Pets';
import * as SC from './Footer.styled';

export const Footer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <footer>
      <Container style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <SC.Button onClick={handleOpen} sx={{ textAlign: 'center' }}>
          <PetsIcon />
          <SC.ButtonText>Reactotouille</SC.ButtonText>
          <PetsIcon />
        </SC.Button>
        <FooterModal open={open} handleClose={handleClose} />
      </Container>
    </footer>
  );
};
