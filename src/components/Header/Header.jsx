import { useState } from 'react';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Container } from 'components/Container/Container.styled';
import { Logo } from 'components/Logo/Logo';
import { Nav } from 'components/Nav/Nav';
import { UserNav } from 'components/UserNav/UserNav';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from 'react-responsive';
import CloseIcon from '@mui/icons-material/Close';
import * as SC from './Header.styled';

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu(value => !value);

  const beforeTablet = useMediaQuery({ query: '(max-width: 767px)' });
  const tablet = useMediaQuery({ query: '(min-width: 768px)' });
  const beforeDesktop = useMediaQuery({ query: '(max-width: 1279px)' });
  const desktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <SC.Header>
      <Container>
        <SC.ToolBar>
          <Logo />
          {tablet && beforeDesktop && (
            <>
              <AuthNav />
              <UserNav />
            </>
          )}
          {beforeDesktop && (
            <IconButton color="inherit" onClick={toggleMenu}>
              {!menu ? (
                <MenuIcon sx={{ fontSize: '40px' }} />
              ) : (
                <CloseIcon sx={{ fontSize: '40px' }} />
              )}
            </IconButton>
          )}
          {desktop && (
            <>
              <Nav />
              <AuthNav />
              <UserNav />
            </>
          )}
        </SC.ToolBar>

        {menu && beforeTablet && (
          <Box height={'100vh'} marginTop={'46px'}>
            <AuthNav />
            <UserNav />
            <Nav />
          </Box>
        )}
        {menu && tablet && beforeDesktop && (
          <Box height={'100vh'} marginTop={'88px'}>
            <Nav />
          </Box>
        )}
      </Container>
    </SC.Header>
  );
};
