import { device } from '../../devices';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerList = styled.ul`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -16px;
  display: flex;
  flex-wrap: wrap;
`;

export const ContainerItem = styled(motion.li)`
  border-radius: 40px;
  background: ${p => p.theme.colors.white};
  margin: 16px;
  padding: 16px 4px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;
  width: calc(33.3333333333% - 32px);
  transition: transform 250ms linear;
  @media (min-width: 280px) and (max-width: 767px) {
    width: 100%;
  }
  @media ${device.tablet} and (max-width: 1279px) {
    width: calc(50% - 32px);
  }
  :hover,
  :focus {
    transform: scale(1.05);
  }
`;

export const ContainerWrap = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  @media ${device.mobile} and (max-width: 767px) {
    max-width: 320px;
  }
  @media ${device.tablet} and (max-width: 1279px) {
    width: 768px;
  }
`;
