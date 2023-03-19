import styled from 'styled-components';

export const News = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[5]}px 0;

  @media screen and (min-width: 768px) {
    width: 704px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${p => p.theme.space[7]}px ${p => p.theme.space[4]}px;
  }
  @media screen and (min-width: 1280px) {
    width: 1249px;
  }
`;

export const NewsCard = styled.li`
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.fs16};
  line-height: 1.38;
  max-width: 280px;
  /* додала ширину before + margin */
  max-height: 286px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    max-width: 336px;
    max-height: 288px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 395px;
    max-height: 267px;
  }

  &:before {
    content: '';
    display: block;
    width: 200px;
    height: 4px;
    border-radius: ${p => p.theme.radii.br40};
    background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
    margin-bottom: ${p => p.theme.space[0]}px;

    @media screen and (min-width: 768px) {
      width: 280px;
      height: 8px;
    }
    @media screen and (min-width: 1280px) {
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
  max-height: 66px;
  overflow: hidden;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const NewsDescription = styled.p`
  color: ${p => p.theme.colors.newsText};
  margin-bottom: ${p => p.theme.space[3]}px;

  @media screen and (min-width: 768px) {
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
`;