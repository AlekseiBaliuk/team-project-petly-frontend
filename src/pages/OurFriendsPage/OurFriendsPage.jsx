import { PageTitle } from 'components/PageTitle/PageTitle';
import OurFriendsContainer from '../../components/OurFriends/OurFriendsContainer';
import { Container } from './OurFriendsPage.styled';
const OurFriendsPage = () => {
  return (
    <Container>
      <PageTitle>Our Friends</PageTitle>
      <OurFriendsContainer />
    </Container>
  );
};

export default OurFriendsPage;
