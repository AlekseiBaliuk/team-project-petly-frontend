import styled from 'styled-components';
import { device } from '../../devices';

export const Wrapper = styled.div`
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  z-index: 50;

  overflow-y: scroll;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const Form = styled.form`
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

  position: absolute;
  top: 32px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 100;
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

export const BtnListCategory = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.space[1]}px;
  margin-bottom: ${props => props.theme.space[4]}px;

  @media ${device.tablet} {
    gap: ${props => props.theme.space[2]}px;
    margin-bottom: 28px;
  }
`;

export const BtnCategory = styled.button`
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

  &:hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
  }
`;

export const LabelList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[2]}px;
  text-align: left;
  margin-bottom: ${props => props.theme.space[5]}px;

  @media ${device.tablet} {
    gap: 28px;
  }
`;

export const Label = styled.label`
  font-size: ${props => props.theme.fontSizes.fs18};
  color: ${props => props.theme.colors.mainText};

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs24};
    color: ${props => props.theme.colors.black};
  }
`;

export const Input = styled.input`
  background: ${props => props.theme.colors.background};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  font-weight: ${props => props.theme.fontWeights.fw400};
  font-size: ${props => props.theme.fontSizes.fs14};
  color: rgba(27, 27, 27, 0.6);
  padding: 11px 0 12px 14px;
  width: 100%;
  margin-top: ${props => props.theme.space[1]}px;

  @media ${device.tablet} {
    margin-top: 12px;
    font-size: ${props => props.theme.fontSizes.fs16};
    color: rgba(17, 17, 17, 0.6);
    padding: 11px 0 10px 16px;
  }
`;

export const BtnStepList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 21px;

  @media ${device.tablet} {
    flex-direction: row-reverse;
    gap: 20px;
    justify-content: center;
  }
`;

export const BtnStep = styled.button`
  width: 240px;
  height: 40px;
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 40px;
  background-color: transparent;
  font-size: ${props => props.theme.fontSizes.fs14};
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.fs20};
    width: 180px;
    height: 44px;
  }

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.background};
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
  }
`;

// SecondForm styles
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
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const InputSex = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  width: 0.4px;
  height: 0.4px;
`;

export const LabelSex = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[3]}px;

  :hover,
  :focus {
    color: ${props => props.theme.colors.accent};
  }

  :has(${InputSex}:checked) {
    color: ${props => props.theme.colors.accent};
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AddDiv = styled.div`
  width: 116px;
  height: 116px;
  background-color: ${props => props.theme.colors.background};
  border-radius: 20px;
  border: none;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

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

export const AddInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  width: 0.4px;
  height: 0.4px;
`;

export const Textarea = styled.textarea`
  padding-top: 16px;
  padding-left: 18px;
  background: ${props => props.theme.colors.background};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  border: none;
  height: 40px;
  resize: none;

  @media ${device.tablet} {
    height: 113px;
  }
`;
