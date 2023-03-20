import styled from 'styled-components';
import { device } from '../../devices';

export const TitlePoint = styled.p`
  text-align: left;
  font-size: ${props => props.theme.fontSizes.fs18};
  color: ${props => props.theme.colors.mainText};

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs24};
    color: ${props => props.theme.colors.black};
    margin-bottom: 28px;
  }
`;

export const SexList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: ${props => props.theme.space[9]}px;
  margin-bottom: ${props => props.theme.space[4]}px;

  @media ${device.tablet} {
    margin-bottom: ${props => props.theme.space[5]}px;
  }
`;

export const SexItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[3]}px;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AddBtn = styled.button`
  width: 116px;
  height: 116px;
  background-color: ${props => props.theme.colors.background};
  border-radius: 20px;
  border: none;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 12px;

  :hover,
  :focus {
    border: 1px ${props => props.theme.colors.accent} solid;
  }

  @media ${device.tablet} {
    width: 140px;
    height: 140px;
    margin-bottom: 0;
  }
`;

export const Textarea = styled.textarea`
  padding-top: 16px;
  padding-left: 18px;
  background: ${props => props.theme.colors.background};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  border: none;
  height: 40px;

  @media ${device.tablet} {
    height: 113px;
  }
`;
