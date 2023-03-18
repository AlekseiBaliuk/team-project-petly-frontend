import styled from 'styled-components';
import { ReactComponent as Plus } from '../../../staticImages/Plus.svg';

export const PlusIcon = styled(Plus)``;

export const Button = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.accent};
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const Text = styled('p')`
  font-size: ${props => props.theme.fontSizes.fs20};
  font-weight: ${props => props.theme.fontWeights.fw500};
  line-height: 1.35;
  margin-right: 12px;
  width: 73px;
`;

export const ButtonWrapper = styled('div')`
  position: absolute;
  right: 0;
  top: 4px;

  display: flex;
  align-items: center;
`;
