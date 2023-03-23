import React, { useEffect, useState } from 'react';
import OurFriendsCard from "./OurFriendsCard";
import { ContainerList, ContainerItem, ContainerWrap } from "./OurFriendsContainer.styled";
import { getFriends } from '../../services';


const OurFriendsContainer = () => {
  const [friendsData, setFriendsData] = useState([]);
  
  useEffect(() => {
     async function fetchFriends() {
      let response;
      try {
        response = await getFriends();
        if (response.length !== 0) {
          setFriendsData(response);
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    fetchFriends();
  }, []);
  
  
  return (
    <ContainerWrap>
      <ContainerList>
        {friendsData.map((friend) => (
          <ContainerItem key={friend._id}>
            <OurFriendsCard data={friend} />
          </ContainerItem>
        ))}
      </ContainerList>
    </ContainerWrap>
  );
};


export default OurFriendsContainer;
