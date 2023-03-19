import { device } from '../../devices';
import styled from "styled-components";
export const Card = styled.div``;
export const CardList = styled.ul`
  position: reletive;
`;

export const CardImage = styled.img`
  width: 158px;
  height: 112px;
 @media ${device.mobile} and (max-width: 767px) {
    width: 110px;
    height: 78px;
  }
  @media ${device.tablet} and (max-width: 1279px) {
    width: 120px;
    height: 85px;
  }
`;

export const CardTitle = styled.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.fw700};
  font-size: ${(p) => p.theme.fontSizes.fs20};
  line-height: 27px;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: ${(p) => p.theme.colors.accent};
  margin-bottom: 16px;
  @media (max-width: 767px) {
    font-size: ${(p) => p.theme.fontSizes.fs12};
    line-height: 16px;
    margin-bottom: 12px;
  }
  @media ${device.tablet} and (max-width: 1279px) {
    font-size: ${(p) => p.theme.fontSizes.fs16};
    line-height: 22px;
  }
`;

export const TitleLink = styled.a`
  font-family: "Manrope";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.fw700};
  font-size: ${(p) => p.theme.fontSizes.fs24};
  line-height: 27px;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: #f59256;
  margin-bottom: 16px;
  @media ${device.mobile} and (max-width: 767px) {
    font-size: ${(p) => p.theme.fontSizes.fs12};
    line-height: 16px;
    margin-bottom: 12px;
  }
  @media ${device.tablet} and (max-width: 1279px) {
    font-size: ${(p) => p.theme.fontSizes.fs16};
    line-height: 22px;
  }
`;

export const CardItem = styled.li`
  margin-bottom: 12px;
  max-width: 206px;
  margin-left: 12px;
  position: relative;
  @media ${device.mobile} and (max-width: 767px) {
    max-width: 150px;
    margin-bottom: 4px;
  }
  @media ${device.tablet} and (max-width: 1279px) {
    margin-bottom: 4px;
  }
`;

export const CardWrap = styled.div`
  display: flex;
`;

export const CardSpan = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.fw500};
  font-size: ${(p) => p.theme.fontSizes.fs16};
  line-height: 20px;
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.black};
   @media ${device.mobile} and (max-width: 767px) {
    font-size: ${(p) => p.theme.fontSizes.fs14};
    line-height: 19px;
  }
  @media ${device.tablet} and (max-width: 1279px) {
    font-size: ${(p) => p.theme.fontSizes.fs12};
    line-height: 16px;
  }
`;

export const CardLink = styled.a`
  font-family: "Manrope";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.fw500};
  font-size: ${(p) => p.theme.fontSizes.fs16};
  line-height: 20px;
  display: flex;
  align-items: center;
  text-decoration-line: none;
  color: ${(p) => p.theme.colors.black};
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 16px;
  }
  @media ${device.tablet} and (max-width: 1279px) {
    font-size: ${(p) => p.theme.fontSizes.fs12};
    line-height: 19px;
  }
`;