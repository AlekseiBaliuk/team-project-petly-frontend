import styled from 'styled-components';
import { theme } from '../../constants/theme';
import { device } from '../../devices';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.colors.white};
  border-radius: 40px;
  padding: 20px 10px;
  overflow-y: scroll;
  height: 100%;
  text-align: center;
  @media ${device.tablet} {
    padding: 30px;
  }
`;
export const List = styled.ul`
  @media ${device.tablet} {
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(6, 1fr);
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
