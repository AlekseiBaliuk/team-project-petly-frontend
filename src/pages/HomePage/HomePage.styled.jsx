import styled from 'styled-components';
import { device } from '../../devices';
import bgS from '../../staticImages/home-decore-s.png';
import bgM from '../../staticImages/home-decore-m.png';
import bgL from '../../staticImages/home-decore-l.png';

export const Home = styled.section`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[3]}px;
  padding-right: ${props => props.theme.space[3]}px;
  background: url(${bgS}) no-repeat bottom;
  width: 320px;

  @media ${device.tablet} {
    width: 768px;
    background: url(${bgM}) no-repeat;
    padding-left: ${props => props.theme.space[4]}px;
    padding-right: ${props => props.theme.space[4]}px;
    padding-top: ${props => props.theme.space[5]}px;
  }

  @media ${device.desktop} {
    width: 1248px;
    background: url(${bgL}) no-repeat bottom;
    padding-left: ${props => props.theme.space[2]}px;
    padding-right: ${props => props.theme.space[2]}px;
    display: flex;
    flex-direction: row;
  }
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.fs32};
  font-weight: ${props => props.theme.fontWeights.fw700};
  line-height: 1.38;
  margin-bottom: ${props => props.theme.space[4]}px;

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs68};
    line-height: 1.47;
    margin-bottom: ${props => props.theme.space[9]}px;
  }

  @media ${device.desktop} {
    margin-bottom: 0;
  }
`;

export const Img = styled.img`
  width: 280px;

  @media ${device.tablet} {
    width: 636px;
    padding-left: ${props => props.theme.space[9]}px;
  }

  @media ${device.tablet} {
    width: 524px;
  }

  @media ${device.desktop} {
    padding-left: 0;
  }
`;

export const Heart = styled.img`
  display: none;

  @media ${device.desktop} {
    display: block;
    position: absolute;
    top: 0;
    right: 487px;
  }
`;
