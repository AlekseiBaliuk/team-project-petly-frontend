import styled from 'styled-components';
import { ReactComponent as Plus } from 'staticImages/Plus.svg';
import { ReactComponent as Plus_Mobile } from 'staticImages/Plus-mobile.svg';

import { device } from 'devices';

export const PlusIcon = styled(Plus)``;

export const PlusIconS = styled(Plus_Mobile)``;

export const Button = styled('button')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.accent};
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  // :hover {
  //   background-color: ${props => props.theme.colors.hoverAccent};
  // }

  @media ${device.beforeTablet} {
    position: fixed;
    right: 15px;
    bottom: 95px;
    z-index: 1000;

    flex-direction: column;
    width: 80px;
    height: 80px;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  }
`;

export const Text = styled('p')`
  font-size: ${props => props.theme.fontSizes.fs12};
  font-weight: ${props => props.theme.fontWeights.fw500};
  color: ${props => props.theme.colors.white};
  line-height: 1.37;
  margin-top: 6px;

  @media ${device.tablet} {
    position: absolute;
    right: 42px;
    font-size: ${props => props.theme.fontSizes.fs20};
    color: ${props => props.theme.colors.black};
    line-height: 1.35;
    margin-right: 12px;
    margin-top: 0px;
    width: 73px;
  }
`;

export const ButtonWrapper = styled('div')`
  position: absolute;
  right: 0;
  top: 4px;

  display: flex;
  align-items: center;
`;
