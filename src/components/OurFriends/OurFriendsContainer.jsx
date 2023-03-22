import OurFriendsCard from "./OurFriendsCard";
import { ContainerList, ContainerItem, ContainerWrap } from "./OurFriendsContainer.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFriends } from "../../redux/friends/friendsSelectors";
import { getFriends } from "../../redux/friends/friendsOperations";

const OurFriendsContainer = () => {
  const friendsData = useSelector(selectFriends);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFriends());
  }, [dispatch]);

  if (!friendsData) return;
  return (
    <ContainerWrap>
      <ContainerList>
        {friendsData.map((friends) => (
          <ContainerItem key={friends._id}>
            <OurFriendsCard data={friends} />
          </ContainerItem>
        ))}
      </ContainerList>
    </ContainerWrap>
  );
};


export default OurFriendsContainer;
