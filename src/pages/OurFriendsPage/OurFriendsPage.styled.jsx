import { device } from '../../devices';
import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  padding-bottom: ${p => p.theme.space[10]}px;
  width: 100%;
  font-family: ${(p) => p.theme.fonts.main};
  color: ${(p) => p.theme.colors.black};
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media ${device.mobile} and (min-width: 768px) {
    width: 768px;
  }
  @media ${device.tablet} and (min-width: 1280px) {
    width: 1280px;
    padding-bottom: 200px;
  }
`;