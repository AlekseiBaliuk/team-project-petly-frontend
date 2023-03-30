import styled from 'styled-components';
import { device } from '../../devices';

export const News = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[5]}px 0;
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    width: 704px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    gap: ${p => p.theme.space[7]}px ${p => p.theme.space[4]}px;
  }
  @media ${device.desktop} {
    width: 1249px;
  }
`;

export const NewsCard = styled.li`
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.fs16};
  line-height: 1.38;
  width: 280px;
  /* додала ширину before + margin */
  height: 286px;
  overflow: hidden;

  @media ${device.tablet} {
    width: 336px;
    height: 288px;
  }
  @media ${device.desktop} {
    width: 395px;
    height: 267px;
  }

  &:before {
    content: '';
    display: block;
    width: 200px;
    height: 4px;
    border-radius: ${p => p.theme.radii.br40};
    background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
    margin-bottom: ${p => p.theme.space[0]}px;

    @media ${device.tablet} {
      width: 280px;
      height: 8px;
    }
    @media ${device.desktop} {
      width: 340px;
      height: 8px;
    }
  }
`;

export const NewsTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.fs24};
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.mainText};
  box-sizing: border-box;
  height: 66px;
  overflow: hidden;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const NewsDescription = styled.p`
  color: ${p => p.theme.colors.newsText};
  margin-bottom: ${p => p.theme.space[3]}px;

  @media ${device.tablet} {
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;

export const NewsMoreInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NewsDate = styled.p`
  color: ${p => p.theme.colors.inputText};
`;

export const NewsLink = styled.a`
  font-weight: ${p => p.theme.fontWeights.fw500};
  text-decoration-line: underline;
  color: ${p => p.theme.colors.accent};
  transition: text-decoration-line 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    text-decoration-line: none;
  }
`;

export const Message = styled.p`
  font-size: ${p => p.theme.fontSizes.fs28};
  text-align: center;
`;
