import { useState, useEffect } from 'react';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Container } from 'components/Container/Container.styled';
import { Logo } from 'components/Logo/Logo';
import { Nav } from 'components/Nav/Nav';
import { UserNav } from 'components/UserNav/UserNav';
import { Toolbar, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  const toggleMenu = () => setMenu(value => !value);
  if (width < 768) {
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
  }

  if (width >= 768 && width < 1200) {
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
            <AuthNav />
            <UserNav />
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
              <Nav />
            </Box>
          )}
        </Container>
      </header>
    );
  } else {
    return (
      <header style={{ marginBottom: '44px' }}>
        <Container>
          <Logo />
          <Nav />
          <AuthNav />
          <UserNav />
        </Container>
      </header>
    );
  }
};
