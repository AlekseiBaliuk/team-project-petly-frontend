import { device } from 'devices';
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
`;

export const Content = styled.div`
  position: relative;
  width: 280px;
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[3]}px;
  
  /* display: flex;
  flex-direction: column;
  align-items: center; */

  border-radius: ${p=>p.theme.radii.br20};

  @media screen and (min-width:${device.tablet}){
    width: 280px;
    padding: ${p => p.theme.space[5]}px ${p => p.theme.space[9]}px;
    
    border-radius: ${p=>p.theme.radii.br40};

  }
  `;
