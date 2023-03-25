import styled from 'styled-components';
import { device } from '../../devices';

export const NewsPageBox = styled.section`
  /* padding-top: ${p => p.theme.space[5]}px; */
  padding-bottom: ${p => p.theme.space[10]}px;

  /* @media ${device.tablet} {
    padding-top: ${p => p.theme.space[9]}px;
  } */

  @media ${device.desktop} {
    /* padding-top: ${p => p.theme.space[7]}px; */
    padding-bottom: 200px;
  }

  form {
    margin-bottom: ${p => p.theme.space[5]}px;
    @media ${device.tablet} {
      margin-bottom: ${p => p.theme.space[7]}px;
    }
  }
`;
