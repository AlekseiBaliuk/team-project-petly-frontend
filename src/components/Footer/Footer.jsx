import { useState } from 'react';
import { Container } from 'components/Container/Container.styled';
import { FooterModal } from './FooterModal/FooterModal';
import Button from '@mui/material/Button';

export const Footer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <footer>
      <Container>
        <Button onClick={handleOpen}>Team 9</Button>
        <FooterModal open={open} handleClose={handleClose} />
      </Container>
    </footer>
  );
};
