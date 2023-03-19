import { device } from '../../devices';
import styled from "styled-components";

export const Container = styled.section`
  padding: 54px 20px 100px 20px;
  margin: 0 auto;
  width: 100%;
  font-family: ${(p) => p.theme.fonts.main};
  color: ${(p) => p.theme.colors.black};
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media ${device.mobile} and (min-width: 768px) {
    padding: 90px 32px 100px 32px;
    width: 768px;
  }
  @media ${device.tablet} and (min-width: 1280px) {
    padding: 70px 16px 200px 16px;
    width: 1280px;
  }
`;