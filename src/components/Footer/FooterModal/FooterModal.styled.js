import styled from 'styled-components';
import { theme } from '../../../constants/theme';
import { device } from '../../../devices';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
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
