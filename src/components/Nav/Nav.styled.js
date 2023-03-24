import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../constants/theme';
import { device } from '../../devices';

export const Link = styled(NavLink)`
  font-family: ${theme.fonts.main};
  color: ${theme.colors.navText};
  font-size: ${theme.fontSizes.fs32};
  font-weight: ${theme.fontWeights.fw500};
  line-height: 1.375;
  letter-spacing: 0.04em;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: ${theme.colors.accent};
  }
  @media ${device.tablet} {
    font-size: ${theme.fontSizes.fs48};
  }
  @media ${device.desktop} {
    font-size: ${theme.fontSizes.fs20};
  }
  &.active {
    color: ${theme.colors.accent};
    border-bottom: ${theme.borders.main};
  }
`;
export const Nav = styled.nav`
  @media ${device.beforeDesktop} {
    text-align: center;
  }
  @media (max-width: 767px) {
    margin-top: 60px;
  }
`;
export const List = styled.ul`
  @media ${device.desktop} {
    display: flex;
  }
`;
export const ListItem = styled.li`
  @media ${device.beforeDesktop} {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
  @media ${device.tabletOnly} {
    &:not(:last-child) {
      margin-bottom: 60px;
    }
  }
  @media ${device.desktop} {
    &:not(:first-child) {
      margin-left: 80px;
    }
  }
`;
