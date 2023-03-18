import styled from 'styled-components';

export const NewsPageBox = styled.main`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[10]}px;

  @media screen and (min-width: 768px) {
    padding-top: ${p => p.theme.space[9]}px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: ${p => p.theme.space[7]}px;
    padding-bottom: 200px;
  }
`;
