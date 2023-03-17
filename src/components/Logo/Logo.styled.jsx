import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../constants/theme';

export const LogoLink = styled(Link)`
  color: ${theme.colors.mainText};
  font-family: ${theme.fonts.logo};
  font-weight: ${theme.fontWeights.fw700};
  font-size: ${theme.fontSizes.fs32};
  line-height: 1.5;
  letter-spacing: 0.07em;
`;

export const LogoSpan = styled.span`
  color: ${theme.colors.accent};
`;
