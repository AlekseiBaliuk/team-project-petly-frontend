import styled from 'styled-components';
import { ReactComponent as Cat } from 'staticImages/catUp.svg';
import { device } from '../../../devices';

const Noads = styled('p')`
  text-align: center;
  color: #d49c3c;
  font-size: 80px;
  text-shadow: 0 1px 0 #dcca0d, 0 2px 0 #d2c218, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
`;

const Grid = styled('ul')`
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  grid-gap: 32px;
  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fill, 336px);
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(auto-fill, 288px);
  }
`;

const Scroll = styled(Cat)`
  width: 60px;
  height: 60px;
  background: transparent;
  fill: ${props => props.theme.colors.accent};
  border-radius: 50%;
  position: fixed;
  bottom: 15px;
  right: 35px;
  cursor: pointer;
  transition: 0.3s all;

  :hover,
  :focus {
    filter: drop-shadow(0px 0px 30px red);
  }

  @media ${device.tablet} {
    bottom: 50px;
    right: 50px;
  }
`;

const style = { Scroll, Grid, Noads };

export default style;
