import styled from 'styled-components';
import { theme } from '../../../constants/theme';
import { device } from '../../../devices';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 320px;
  background-color: ${theme.colors.white};
  border-radius: 40px;
  padding: 10px;
  overflow-y: scroll;
  height: 100%;
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${theme.borders.main};
  border-bottom-left-radius: 40px 40px;
  border-bottom-right-radius: 40px 40px;
  box-shadow: rgba(0, 0, 0, 0.11) 7px 4px 14px;
  @media ${device.tablet} {
    width: 200px;
  }
`;

export const IconSet = styled.div`
  display: flex;
  gap: 10px;
`;
export const SocialLink = styled.a`
  color: ${theme.colors.mainText};
  &:hover {
    color: ${theme.colors.accent};
  }
`;
