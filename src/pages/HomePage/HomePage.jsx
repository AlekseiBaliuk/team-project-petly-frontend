import React from 'react';
import img from '../../staticImages/home.png';
import heart from '../../staticImages/home-heart.png';
import { Home, Title, Img, Heart } from './HomePage.styled';

const HomePage = () => {
  return (
    <Home>
      <Title>Take good care of your small pets</Title>
      <Img src={img} alt="Labrador" />
      <Heart src={heart} alt="Heart" />
    </Home>
  );
};

export default HomePage;
