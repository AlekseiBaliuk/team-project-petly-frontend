import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../../../devices';

export const CategoriesList = styled('ul')`
  display: flex;
  flex-wrap: wrap;

  @media ${device.mobileOnly} {
    max-width: 260px;
  }

  @media ${device.tabletOnly} {
    max-width: 476px;
  }
`;

export const CategoryItem = styled('li')`
  :not(:last-child) {
    margin-right: 12px;
  }

  @media ${device.mobileOnly} {
    :nth-last-child(-n + 4) {
      margin-top: 16px;
    }
  }

  @media ${device.tablet} {
    :nth-last-child(-n + 2) {
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
`;
