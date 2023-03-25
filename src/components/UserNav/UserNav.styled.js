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
  padding: 8px 36px;
  display: flex;
  align-items: center;
  border: ${theme.borders.main};
  border-radius: 40px;
  background-color: ${theme.colors.white};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media ${device.tablet} {
    font-size: ${theme.fontSizes.fs20};
    padding-left: 28px;
    padding-right: 28px;
  }
  &.active,
  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.accent};
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  @media ${device.tabletOnly} {
    margin-right: 20px;
  }
  @media ${device.desktop} {
    margin-left: auto;
  }
`;
