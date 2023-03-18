import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.fs24};
  line-height: 1.38;
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.fs48};
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;
