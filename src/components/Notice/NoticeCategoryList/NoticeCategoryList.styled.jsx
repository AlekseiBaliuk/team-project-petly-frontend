import styled from 'styled-components';

export const Grid = styled('ul')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 32px;
`;
