import styled from 'styled-components';
import { theme } from '../../../constants/index';
import { device } from '../../../devices';

export const ListItem = styled.li`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${theme.borders.main};
  border-bottom-left-radius: 40px 40px;
  border-bottom-right-radius: 40px 40px;
  box-shadow: rgba(0, 0, 0, 0.11) 7px 4px 14px;
  max-width: 300px;
  background-color: ${theme.colors.white};
  transform: scale(1);
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  @media ${device.beforeTablet} {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  &:hover {
    transform: scale(1.2);
    z-index: 9;
  }
  @media ${device.beforeDesktop} {
    &:last-child {
      grid-column-start: 2;
    }
  }
  @media ${device.tablet} {
    width: 200px;
  }
  @media ${device.desktop} {
    &:nth-child(13) {
      grid-column-start: 2;
    }
  }
`;
export const IconSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
`;
export const SocialLink = styled.a`
  color: ${theme.colors.mainText};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: ${theme.colors.accent};
  }
`;
