import styled from 'styled-components';
import { ReactComponent as Cat } from 'staticImages/catUp.svg';

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
  bottom: 50px;
  right: 50px;
  cursor: pointer;
  transition: 0.3s all;
`;

const style = { Scroll, Grid };

export default style;
