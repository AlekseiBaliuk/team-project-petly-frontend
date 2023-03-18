import { useState } from 'react';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Container } from 'components/Container/Container.styled';
import { Logo } from 'components/Logo/Logo';
import { Nav } from 'components/Nav/Nav';
import { UserNav } from 'components/UserNav/UserNav';
import { Toolbar, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(value => !value);

  return (
    <header style={{ marginBottom: '44px' }}>
      <Container>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            paddingTop: '16px',
            marginBottom: '44px',
          }}
        >
          <Logo />
          <IconButton color="inherit" onClick={toggleMenu}>
            {!menu ? (
              <MenuIcon sx={{ fontSize: '40px' }} />
            ) : (
              <CloseIcon sx={{ fontSize: '40px' }} />
            )}
          </IconButton>
        </Toolbar>
        {menu && (
          <Box height={'100vh'}>
            <AuthNav />
            <UserNav />
            <Nav />
          </Box>
        )}
      </Container>
    </header>
  );
};
