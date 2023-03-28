import styled from 'styled-components';
import { ReactComponent as Heart } from 'staticImages/Heart.svg';
import { ReactComponent as IconDel } from 'staticImages/Del.svg';
import { device } from 'devices';

const Del = styled(IconDel)`
  margin-left: 15px;
  fill: ${props => props.theme.colors.accent};
`;

const Card = styled('li')`
  position: relative;
  width: 280px;
  padding-bottom: 10px;
  border-radius: 0px 0px 20px 20px;
  background: ${props => props.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  @media ${device.tablet} {
    width: 336px;
  }
  @media ${device.desktop} {
    width: 288px;
  }
`;

const Category = styled('span')`
  position: absolute;
  top: 20px;
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

const HeartIcon = styled(Heart)`
  scale: 1;
  fill: ${props => props.theme.colors.white};
  stroke: ${props => props.theme.colors.accent};
  :hover,
  :focus {
    stroke: ${props => props.theme.colors.hoverAccent};
  }
`;

const HeartIconFav = styled(Heart)`
  scale: 1;
  fill: ${props => props.theme.colors.accent};
  stroke: ${props => props.theme.colors.accent};
  :hover,
  :focus {
    stroke: ${props => props.theme.colors.hoverAccent};
  }
`;

const Like = styled('button')`
  content: '';
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  cursor: pointer;
`;

const Image = styled('img')`
  height: 290px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ItemTitle = styled('h3')`
  margin-bottom: 15px;
  min-height: 80px;
  padding: 0 20px;
  word-break: break-word;
  font-weight: ${props => props.theme.fontWeights.fw700};
  font-size: ${props => props.theme.fontSizes.fs28};
  line-height: 1.366;
  letter-spacing: -0.01em;
  flex-grow: 1;
  color: ${props => props.theme.colors.mainText};
`;

const List = styled('ul')`
  margin-bottom: 20px;
`;

const Item = styled('li')`
  display: grid;
  grid-template-columns: 1fr 2fr;
  :not(:last-child) {
    margin-bottom: 8px;
  }
  margin-left: 20px;
  font-weight: ${props => props.theme.fontWeights.fw500};
  font-size: ${props => props.theme.fontSizes.fs16};
  line-height: 1.375;
  color: ${props => props.theme.colors.mainText};
`;

const Span = styled('span')`
  font-weight: ${props => props.theme.fontWeights.fw500};
  font-size: ${props => props.theme.fontSizes.fs16};
  line-height: 1.375;
  color: ${props => props.theme.colors.mainText};
`;

const Loadmore = styled('button')`
  margin-bottom: 10px;
  width: 250px;
  height: 38px;
  border: ${props => props.theme.borders.main};
  border-radius: 40px;
  font-weight: ${props => props.theme.fontWeights.fw500};
  font-size: ${props => props.theme.fontSizes.fs16};
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.accent};
  cursor: pointer;
  :hover,
  :focus {
    border-color: ${props => props.theme.colors.hoverAccent};
    color: ${props => props.theme.colors.hoverAccent};
  }
  background: ${props => props.theme.colors.white};
`;

const Delete = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 38px;
  border: ${props => props.theme.borders.main};
  border-radius: 40px;
  font-weight: ${props => props.theme.fontWeights.fw500};
  font-size: ${props => props.theme.fontSizes.fs16};
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.accent};
  cursor: pointer;
  :hover,
  :focus {
    border-color: #ff6101;
    color: #ff6101;
  }
  background: ${props => props.theme.colors.white};
`;

const ButtonWrap = styled('div')`
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const style = {
  Image,
  Card,
  Category,
  Like,
  ItemTitle,
  Item,
  List,
  Span,
  Loadmore,
  Delete,
  HeartIcon,
  HeartIconFav,
  ButtonWrap,
  Del,
};

export default style;
