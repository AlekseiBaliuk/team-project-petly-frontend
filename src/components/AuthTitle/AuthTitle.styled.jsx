import styled from 'styled-components';
import { theme } from 'constants';
import { device } from 'devices';

export const Title = styled.h1`
  font-size: ${theme.fontSizes.fs24};
  line-height: 1.38;
  text-align: center;
  margin-bottom: ${theme.space[4]}px;
  font-weight: ${theme.fontWeights.fw700};

  @media ${device.tablet} {
    font-size: ${theme.fontSizes.fs48};
    margin-bottom: ${theme.space[5]}px;
  }
`;
