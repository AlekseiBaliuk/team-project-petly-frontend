import { ErrorMessage } from 'formik';
import styled from 'styled-components';
import { device } from 'devices';
import { theme } from 'constants/theme';

export const ValidationMessage = styled(ErrorMessage)`
  position: absolute;
  z-index: 999;
  top: 40px;
  left: 15px;
  color: ${theme.colors.accent};

  @media ${device.tablet} {
    left: 20px;
    top: 55px;
  }
`;

export const Icon = styled.span`
  display: inline-block;
  position: absolute;
  width: 48px;
  height: 48px;
  scale: 0.4;
  background-image: url('${props => props.url}');
  right: 0;
  top: -4px;
  cursor: pointer;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 0.45;
  }

  @media ${device.tablet} {
    scale: 0.5;
    top: 2px;

    &:hover {
      scale: 0.55;
    }
  }
`;

export const Label = styled.label`
  display: block;
  position: relative;
  width: 275px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    width: 438px;
  }
`;
