import styled from 'styled-components';
import { theme } from '../../constants/theme';
import { device } from '../../devices';

export const Button = styled.button`
  font-family: ${theme.fonts.main};
  color: ${theme.colors.navText};
  font-size: ${theme.fontSizes.fs32};
  font-weight: ${theme.fontWeights.fw500};
  line-height: 1.375;
  letter-spacing: 0.04em;
  background: none;
  border: none;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: ${theme.colors.accent};
  }
  @media ${device.desktop} {
    font-size: ${theme.fontSizes.fs20};
  }
`;
export const ButtonText = styled.p`
  margin-left: 5px;
  margin-right: 5px;
`;
