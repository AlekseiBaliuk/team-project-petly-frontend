import styled from 'styled-components';
import { device } from 'devices';

export const Section = styled('section')`
  padding-bottom: 100px;
  @media ${device.desktop} {
    padding-bottom: 200px;
  }
`;

export const Title = styled('h2')`
  font-size: ${props => props.theme.fontSizes.fs24};
  font-weight: ${props => props.theme.fontWeights.fw700};
  line-height: 1.375;
  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs48};
  }
  text-align: center;
`;

export const PetSearchNav = styled('div')`
  @media ${device.tablet} {
    position: relative;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
`;
