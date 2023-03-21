import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { Logo } from 'components/Logo/Logo';
import { Nav } from 'components/Nav/Nav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserNav } from 'components/UserNav/UserNav';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { Container } from 'components/Container/Container.styled';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import * as SC from './Header.styled';

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const toggleMenu = () => setMenu(value => !value);
  const closeMenu = () => setMenu(false);

  console.log(isLoggedIn);
  const beforeTablet = useMediaQuery({ query: '(max-width: 767px)' });
  const tablet = useMediaQuery({ query: '(min-width: 768px)' });
  const beforeDesktop = useMediaQuery({ query: '(max-width: 1279px)' });
  const desktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <SC.Header>
      <Container>
        <SC.ToolBar>
          <SC.LogoContainer onClick={closeMenu}>
            <Logo />
          </SC.LogoContainer>
          {!menu && tablet && beforeDesktop && (
            <>{!isLoggedIn ? <AuthNav /> : <UserNav />}</>
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
              {!isLoggedIn ? <AuthNav /> : <UserNav />}
            </>
          )}
        </SC.ToolBar>

        {menu && beforeTablet && (
          <Box onClick={closeMenu} height={'100vh'} marginTop={'46px'}>
            {!isLoggedIn ? <AuthNav /> : <UserNav />}
            <Nav />
          </Box>
        )}
        {menu && tablet && beforeDesktop && (
          <Box onClick={closeMenu} height={'100vh'} marginTop={'88px'}>
            <Nav />
          </Box>
        )}
      </Container>
    </SC.Header>
  );
};
