import styled from 'styled-components';
import { theme } from '../../constants/theme';
import { device } from '../../devices';
import bgS from '../../staticImages/decore-register-step-one-s.png';
import bgM from '../../staticImages/decore-auth-m.png';
import bgL from '../../staticImages/decore-auth-l.png';

export const Container = styled.section`
  background-image: url(${bgS});
  background-repeat: no-repeat;
  background-position: right 0% bottom 0%;
  background-size: contain;
  padding-bottom: 60px;
  @media ${device.desktop} {
    padding-bottom: 150px;
  }

  @media ${device.tablet} {
    background-image: url(${bgM});
  }

  @media ${device.desktop} {
    background-image: url(${bgL});
  }
`;

export const Wrapper = styled.div`
  @media ${device.tablet} {
    width: 608px;
    height: auto;
    background-color: ${theme.colors.white};
    margin: 0px auto;
    padding: 60px 0px;
    border-radius: ${theme.radii.br40};
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }
  @media ${device.desktop} {
    width: 618px;
  }
`;

export const Login = styled.p`
  color: ${theme.colors.inputText};
  display: block;
  text-align: center;
  font-family: ${theme.fonts.main};
  font-weight: ${theme.fontWeights.fw400};
  font-size: ${theme.fontSizes.fs12};
`;
