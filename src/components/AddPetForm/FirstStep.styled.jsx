import styled from 'styled-components';
import { device } from '../../devices';

export const Form = styled.form`
  border: 1px red solid;
  max-width: 280px;
  padding: ${props => props.theme.space[5]}px ${props => props.theme.space[3]}px;
  background: ${props => props.theme.colors.white};
  border-radius: 20px;
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.fw500};

  @media ${device.tablet} {
    max-width: 608px;
    padding-left: ${props => props.theme.space[9]}px;
    padding-right: ${props => props.theme.space[9]}px;
  }
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.fs24};
  line-height: 1.37;
  color: ${props => props.theme.colors.mainText};
  margin-bottom: ${props => props.theme.space[3]}px;

  @media ${device.tablet} {
    font-weight: ${props => props.theme.fontWeights.fw600};
    font-size: ${props => props.theme.fontSizes.fs36};
    line-height: 1.36;
    color: ${props => props.theme.colors.black};
  }
`;

export const Subtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.fs16};
  line-height: 1.37;
  color: ${props => props.theme.colors.mainText};
  margin-bottom: ${props => props.theme.space[3]}px;

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs20};
    line-height: 1.35;
    color: ${props => props.theme.colors.black};
    margin-bottom: ${props => props.theme.space[4]}px;
  }
`;

export const BtnList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.space[1]}px;
  margin-bottom: ${props => props.theme.space[4]}px;

  @media ${device.tablet} {
    gap: ${props => props.theme.space[2]}px;
    margin-bottom: 28px;
  }
`;

export const BtnItem = styled.button`
  padding: ${props => props.theme.space[1]}px 28px;
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 40px;
  background-color: transparent;
  font-size: ${props => props.theme.fontSizes.fs14};
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  @media ${device.tablet} {
    padding: 10px 28px;
    font-size: ${props => props.theme.fontSizes.fs20};
  }

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
  }
`;
