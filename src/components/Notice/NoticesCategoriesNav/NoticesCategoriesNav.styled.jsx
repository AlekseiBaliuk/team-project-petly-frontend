import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'devices';

export const CategoriesList = styled('ul')`
  display: flex;
  flex-wrap: wrap;

  @media ${device.beforeTablet} {
    max-width: 260px;
  }

  @media ${device.tabletOnly} {
    max-width: 476px;
  }
`;

export const CategoryItem = styled('li')`
  :nth-child(1) {
    order: 1;
  }
  :nth-child(2) {
    order: 2;
  }
  :nth-child(3) {
    order: 3;
  }
  :nth-child(4) {
    order: 4;
  }
  :nth-child(5) {
    order: 5;
  }

  :not(:last-child) {
    margin-right: 12px;
  }

  @media ${device.desktop} {
    :nth-child(3) {
      order: 0;
      margin-right: 12px;
    }
  }

  @media ${device.beforeDesktop} {
    :nth-child(3) {
      margin-right: 0px;
    }
  }

  @media ${device.beforeTablet} {
    :nth-last-child(-n + 4) {
      margin-top: 12px;
    }
  }

  @media ${device.tabletOnly} {
    :nth-child(4),
    :nth-child(5) {
      margin-top: 16px;
    }
  }
`;

export const Link = styled(NavLink)`
  display: block;
  font-size: ${props => props.theme.fontSizes.fs20};
  font-weight: ${props => props.theme.fontWeights.fw500};
  line-height: 1.35;
  letter-spacing: 0.04;
  color: ${props => props.theme.colors.mainText};

  cursor: pointer;
  padding: 10px 28px;
  background-color: ${props => props.theme.colors.white};
  border: ${props => props.theme.borders.main};
  border-color: ${props => props.theme.colors.accent};
  border-radius: 40px;

  &.active,
  &:hover {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.accent};
  }

  @media ${device.beforeTablet} {
    font-size: ${props => props.theme.fontSizes.fs14};
    padding: 8px 28px;
    line-height: 1.21;
  }
`;
