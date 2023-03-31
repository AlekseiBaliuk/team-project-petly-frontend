import React, { useEffect, useState } from 'react';
import OurFriendsCard from './OurFriendsCard';
import {
  ContainerList,
  ContainerItem,
  ContainerWrap,
} from './OurFriendsContainer.styled';
import { getFriends } from '../../services';

const OurFriendsContainer = () => {
  const [friendsData, setFriendsData] = useState([]);

  const listVariants = {
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
      },
    }),
    hidden: { opacity: 0, y: 100 },
  };

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
        {friendsData.map((friend, i) => (
          <ContainerItem
            key={friend._id}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            <OurFriendsCard data={friend} />
          </ContainerItem>
        ))}
      </ContainerList>
    </ContainerWrap>
  );
};

export default OurFriendsContainer;
