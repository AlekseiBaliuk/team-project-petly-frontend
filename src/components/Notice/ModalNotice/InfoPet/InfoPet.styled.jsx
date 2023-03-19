import styled from 'styled-components';
import { device } from 'devices';
import { ReactComponent as Heart } from 'staticImages/Heart.svg';

const Wrapper = styled('div')`
  padding: 60px 20px 40px;

  @media ${device.tablet} {
    padding: 32px 20px 20px;
    display: grid;
    grid-template:
      'image grid grid'
      'image grid grid'
      'text text text'
      '. but link'
      /288px 150px 150px;
    grid-column-gap: 20px;
  }
`;

const WrapperGrid = styled('div')`
  grid-area: grid;
`;

const Title = styled('h3')`
  font-size: ${props => props.theme.fontSizes.fs24};
  font-weight: ${props => props.theme.fontWeights.fw700};
  line-height: 1.375;
  padding-bottom: 16px;
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs28};
  }
`;

const Item = styled('li')`
  font-weight: ${props => props.theme.fontWeights.fw600};
  font-size: ${props => props.theme.fontSizes.fs14};
  line-height: 1.375;
  display: grid;
  grid-template-columns: 1fr 1fr;
  :not(:last-child) {
    padding-bottom: 8px;
  }
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs16};
  }
`;

const ItemText = styled('span')`
  font-weight: ${props => props.theme.fontWeights.fw500};
`;

const Text = styled('p')`
  grid-area: text;
  font-weight: ${props => props.theme.fontWeights.fw500};
  font-size: ${props => props.theme.fontSizes.fs14};
  line-height: 1.375;
  margin: 28px 0 40px;
  & > span {
    font-weight: ${props => props.theme.fontWeights.fw600};
  }
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs16};
    margin-bottom: 32px;
  }
`;

const Button = styled('button')`
  grid-area: but;
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 248px;
  height: 40px;
  justify-content: center;
  border: ${props => props.theme.borders.main};
  border-radius: 40px;
  font-weight: ${props => props.theme.fontWeights.fw500};
  font-size: ${props => props.theme.fontSizes.fs16};
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.black};
  cursor: pointer;
  :hover,
  :focus {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
  }
  background: ${props => props.theme.colors.white};
  @media ${device.tablet} {
    width: 160px;
  }
`;

const Link = styled('a')`
  grid-area: link;
  display: block;
  margin: 0 auto 12px;
  padding-top: 6px;
  height: 40px;
  width: 248px;
  text-align: center;
  border: ${props => props.theme.borders.main};
  border-radius: 40px;
  font-weight: ${props => props.theme.fontWeights.fw500};
  font-size: ${props => props.theme.fontSizes.fs16};
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.black};
  cursor: pointer;
  :hover,
  :focus {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
  }
  @media ${device.tablet} {
    width: 160px;
  }
`;

const Image = styled('img')`
  grid-area: image;
  width: 240px;
  height: 240px;
  margin-bottom: 16px;
  object-fit: cover;
  transition: transform 0.25s;
  border-radius: 0px 0px 40px 40px;
  :hover,
  focus {
    transform: scale(1.1);
  }
  @media ${device.tablet} {
    width: 288px;
    height: 328px;
    margin: 0;
  }
`;

const HeartIcon = styled(Heart)`
  width: 20px;
  height: 20px;
  margin-left: 9px;
  scale: 1;
  fill: ${props => props.theme.colors.accent};
  stroke: ${props => props.theme.colors.white};
  :hover,
  :focus {
    stroke: ${props => props.theme.colors.white};
  }
`;

const style = {
  Image,
  Wrapper,
  Title,

  Item,
  ItemText,
  Text,
  Button,
  Link,
  HeartIcon,
  WrapperGrid,
};

export default style;
