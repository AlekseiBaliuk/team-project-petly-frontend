import styled from 'styled-components';
import { ReactComponent as Cat } from 'staticImages/catUp.svg';
import { device } from '../../../devices';

const Grid = styled('ul')`
  display: grid;
  grid-template-columns: repeat(auto-fill, 288px);
  grid-gap: 32px;
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

const style = { Scroll, Grid };

export default style;
