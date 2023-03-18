import { AuthNav } from 'components/AuthNav/AuthNav';
import { Container } from 'components/Container/Container.styled';
import { Logo } from 'components/Logo/Logo';
import { Nav } from 'components/Nav/Nav';
import { UserNav } from 'components/UserNav/UserNav';

export const Header = () => {
  return (
    <header>
      <Container>
        <Logo />
        <AuthNav />
        <UserNav />
        <Nav />
      </Container>
    </header>
  );
};
