import { PageTitle } from 'components/PageTitle/PageTitle';
import OurFriendsContainer from "../../components/OurFriends/OurFriendsContainer";
import { Container } from "./OurFriendsPage.styled";
const OurFriendsPage = () => {
  return (
    <Container>
      <PageTitle title={"Our friends"} />
      <OurFriendsContainer />
    </Container>
  );
};

export default OurFriendsPage;
