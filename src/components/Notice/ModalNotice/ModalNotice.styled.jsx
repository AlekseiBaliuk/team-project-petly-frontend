import styled from 'styled-components';
import { device } from 'devices';

const ModalBackdrop = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 1000;
`;
const ModalContent = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90vw;
  @media ${device.tablet} {
    width: 704px;
    height: 540px;
    transform: translate(-50%, -50%);
  }
  border-radius: ${props => props.theme.radii.br40};
  background: ${props => props.theme.colors.white};
  transform: translate(-50%, -25%);
`;

const BtnClose = styled('button')`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  padding: 9px;
  background-color: ${props => props.theme.colors.background};

  backdrop-filter: blur(2px);
  border-radius: ${props => props.theme.radii.round};
  border: none;
  cursor: pointer;
  z-index: 5;
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
  }
`;
const styles = { ModalBackdrop, ModalContent, BtnClose };
export default styles;
