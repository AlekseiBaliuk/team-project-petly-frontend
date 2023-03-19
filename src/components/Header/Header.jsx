import { useState, useEffect } from 'react';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Container } from 'components/Container/Container.styled';
import { Logo } from 'components/Logo/Logo';
import { Nav } from 'components/Nav/Nav';
import { UserNav } from 'components/UserNav/UserNav';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import * as SC from './Header.styled';

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
      <SC.Header>
        <Container>
          <SC.ToolBar>
            <Logo />
            <IconButton color="inherit" onClick={toggleMenu}>
              {!menu ? (
                <MenuIcon sx={{ fontSize: '40px' }} />
              ) : (
                <CloseIcon sx={{ fontSize: '40px' }} />
              )}
            </IconButton>
          </SC.ToolBar>
          {menu && (
            <Box height={'100vh'} marginTop={'46px'}>
              <AuthNav />
              <UserNav />
              <Nav />
            </Box>
          )}
        </Container>
      </SC.Header>
    );
  }

  if (width >= 768 && width < 1200) {
    return (
      <SC.Header>
        <Container>
          <SC.ToolBar>
            <Logo />
            <AuthNav />
            <UserNav />
            <IconButton
              color="inherit"
              onClick={toggleMenu}
              sx={{ ml: '20px' }}
            >
              {!menu ? (
                <MenuIcon sx={{ fontSize: '40px' }} />
              ) : (
                <CloseIcon sx={{ fontSize: '40px' }} />
              )}
            </IconButton>
          </SC.ToolBar>
          {menu && (
            <Box height={'100vh'} marginTop={'88px'}>
              <Nav />
            </Box>
          )}
        </Container>
      </SC.Header>
    );
  } else {
    return (
      <SC.Header>
        <Container>
          <SC.ToolBar>
            <Logo />
            <Nav />
            <AuthNav />
            <UserNav />
          </SC.ToolBar>
        </Container>
      </SC.Header>
    );
  }
};
