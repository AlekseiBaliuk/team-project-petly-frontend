import React from 'react';
import { motion } from 'framer-motion';
import img from '../../staticImages/home.png';
import heart from '../../staticImages/home-heart.png';
import { Home, Title, Img, Heart, Container } from './HomePage.styled';

const HomePage = () => {
  const titleVariants = {
    hidden: {
      x: -1000,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <Home>
      <Container>
        <motion.div
          initial={'hidden'}
          animate={'visible'}
          transition={{
            delay: 0.1,
            ease: 'backOut',
          }}
          variants={titleVariants}
        >
          <Title>Take good care of your small pets</Title>
        </motion.div>
        <Img src={img} alt="Labrador" />
        <Heart src={heart} alt="Heart" />
      </Container>
    </Home>
  );
};

export default HomePage;
