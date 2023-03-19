import styled from 'styled-components';
import { device } from '../../devices';

export const Header = styled.header`
  margin-bottom: 40px;
  @media ${device.tablet} {
    margin-bottom: 80px;
  }
  @media ${device.desktop} {
    margin-bottom: 60px;
  }
`;
export const ToolBar = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    justify-content: space-between;
  }
`;
