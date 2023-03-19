import styled from 'styled-components';
import { device } from '../../devices';

export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.fs24};
  line-height: 1.38;
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;

  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.fs48};
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;
