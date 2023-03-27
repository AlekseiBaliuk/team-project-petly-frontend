import styled from 'styled-components';
import { theme } from '../../../constants/theme';
import { device } from '../../../devices';

export const ButtonRegister = styled.button`
  color: ${theme.colors.navText};
  font-family: ${theme.fonts.main};
  font-weight: ${theme.fontWeights.fw500};
  font-size: ${theme.fontSizes.fs20};
  line-height: 1.37;
  letter-spacing: 0.04em;
  padding: 8px 28px;
  display: block;
  border: ${theme.borders.main};
  border-radius: 40px;
  background-color: ${theme.colors.accent};
  width: 280px;
  height: 44px;
  margin: 0px auto 12px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:focus,
  &:hover {
    color: ${theme.colors.accent};
  }

  @media ${device.tablet} {
    width: 448px;
    font-size: ${theme.fontSizes.fs20};
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media ${device.desktop} {
    width: 458px;
    height: 48px;
  }

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.accent};
  }
`;

export const ButtonPrevius = styled(ButtonRegister)`
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  margin: 0px auto 40px;
  &:hover {
    color: ${theme.colors.accent};
    background-color: ${theme.colors.white};
  }
`;

export const ButtonNext = styled(ButtonRegister)`
  margin: 0px auto 40px;
`;

export const ButtonLogin = styled(ButtonRegister)`
  margin: 0px auto 40px;
`;
