import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../constants/theme';
import { device } from '../../devices';

export const Link = styled(NavLink)`
  color: ${theme.colors.mainText};
  font-family: ${theme.fonts.main};
  font-weight: ${theme.fontWeights.fw500};
  font-size: ${theme.fontSizes.fs14};
  line-height: 1.375;
  letter-spacing: 0.04em;
  padding: 8px 28px;
  display: block;
  border: ${theme.borders.main};
  border-radius: 40px;
  background-color: ${theme.colors.white};
  @media ${device.tablet} {
    font-size: ${theme.fontSizes.fs20};
    padding-top: 10px;
    padding-bottom: 10px;
  }
  &.active,
  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.accent};
  }
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
`;
export const ListItem = styled.li`
  &:last-child {
    margin-left: 12px;
    @media ${device.desktop} {
      margin-left: 20px;
    }
  }
`;
