import styled from 'styled-components';
import { theme } from '../../../constants/theme';
import { device } from '../../../devices';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.colors.white};
  border-radius: 40px;
  padding: 10px;
  overflow-y: scroll;
  height: 100%;
  text-align: center;
  @media ${device.desktop} {
    padding: 30px;
  }
`;
export const List = styled.ul`
  @media ${device.tablet} {
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
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
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover {
    transform: scale(1.2);
    z-index: 9;
  }
  @media ${device.tablet} {
    width: 200px;
  }
`;
export const ModalHeader = styled.p`
  color: ${theme.colors.mainText};
  font-family: ${theme.fonts.logo};
  font-weight: ${theme.fontWeights.fw700};
  font-size: ${theme.fontSizes.fs28};
  line-height: 1.5;
  letter-spacing: 0.07em;
  margin-bottom: 20px;
  @media ${device.tablet} {
    font-size: ${theme.fontSizes.fs32};
  }
`;
export const ModalSpan = styled.span`
  color: ${theme.colors.accent};
`;

export const IconSet = styled.div`
  display: flex;
  gap: 10px;
`;
export const SocialLink = styled.a`
  color: ${theme.colors.mainText};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: ${theme.colors.accent};
  }
`;
