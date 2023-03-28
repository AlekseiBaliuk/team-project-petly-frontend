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
      /288px 150px 160px;
    grid-column-gap: 20px;
  }
`;

const Category = styled('span')`
  position: absolute;
  top: 80px;
  @media ${device.tablet} {
    top: 50px;
  }
  padding: 6px 0 6px 20px;
  width: 158px;
  text-align: center;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.theme.fontWeights.fw500};
  font-size: ${props => props.theme.fontSizes.fs12};
  line-height: 1.33;
  letter-spacing: 0.04em;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
`;

const WrapperGrid = styled('div')`
  grid-area: grid;
`;

const Title = styled('h3')`
  font-size: ${props => props.theme.fontSizes.fs24};
  font-weight: ${props => props.theme.fontWeights.fw700};
  line-height: 1.375;
  padding-bottom: 15px;
  max-width: 280px;
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs28};
  }
`;

const Item = styled('li')`
  font-weight: ${props => props.theme.fontWeights.fw600};
  font-size: ${props => props.theme.fontSizes.fs14};
  line-height: 1.375;
  display: grid;

  grid-template-columns: 2fr 3fr;
  // grid-template-columns: 140px 300px;

  :not(:last-child) {
    padding-bottom: 8px;
  }
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs16};
  }
`;

const ItemText = styled('span')`
  max-width: 200px;
  font-weight: ${props => props.theme.fontWeights.fw500};
  & > a {
    color: ${props => props.theme.colors.mainText};
    :hover,
    :focus {
      color: ${props => props.theme.colors.accent};
    }
  }
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
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  cursor: pointer;
  :hover {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
  }

  @media ${device.tablet} {
    width: 160px;
  }
`;

const Link = styled('a')`
  grid-area: link;
  display: flex;
  margin: 0 auto 12px;
  height: 40px;
  width: 248px;
  align-items: center;
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
  @media ${device.tablet} {
    width: 160px;
  }
`;

const Image = styled('img')`
  grid-area: image;
  height: 240px;
  margin-bottom: 16px;
  object-fit: cover;
  transition: transform 0.25s;
  border-radius: 0px 0px 40px 40px;

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
  Category,
  Item,
  ItemText,
  Text,
  Button,
  Link,
  HeartIcon,
  WrapperGrid,
};

export default style;
