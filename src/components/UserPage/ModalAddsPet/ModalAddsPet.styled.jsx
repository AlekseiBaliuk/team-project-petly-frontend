import { device } from 'devices';
import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 1000;
`;

export const Content = styled.div`
  position: relative;
  width: 280px;
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.br20};
  background-color: ${p => p.theme.colors.white};

  @media ${device.tablet} {
    width: 608px;
    padding: ${p => p.theme.space[5]}px ${p => p.theme.space[9]}px;
    border-radius: ${p => p.theme.radii.br40};
  }
`;

export const Title = styled.h3`
  margin-bottom: 28px;
  text-align: center;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs24};
  line-height: 1.375;
  color: ${p => p.theme.colors.mainText};
  @media ${device.tablet} {
    margin-bottom: ${p => p.theme.space[5]}px;
    font-size: ${p => p.theme.fontSizes.fs36};
    line-height: 1.36;
  }
`;

export const Text = styled.div`
  margin-bottom: 12px;
  text-align: center;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs16};
  line-height: 1.375;
  color: ${p => p.theme.colors.mainText};
  letter-spacing: -0.01em;
  @media ${device.tablet} {
    margin-top: -${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes.fs20};
    line-height: 1.35;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
  @media ${device.tablet} {
    gap: 28px;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[0]}px;
`;

export const Subtitle = styled.span`
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs18};
  line-height: 1.47;
  color: ${p => p.theme.colors.mainText};
  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.fs24};
    line-height: 1.1;
  }
`;

export const Input = styled(Field)`
  padding: 11px 14px 12px;
  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.auth};
  border-radius: ${p => p.theme.radii.br20};
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.fw400};
  font-size: ${p => p.theme.fontSizes.fs14};
  line-height: 1.36;
  @media ${device.tablet} {
    padding: 11px 16px 10px;
    font-size: ${p => p.theme.fontSizes.fs16};
    line-height: 1.66;
  }
`;

export const DateInput = styled(DatePicker)`
  width: 100%;
  padding: 11px 14px 12px;
  box-sizing: border-box;
  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.auth};
  border-radius: ${p => p.theme.radii.br20};
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.fw400};
  font-size: ${p => p.theme.fontSizes.fs14};
  line-height: 1.36;
  @media ${device.tablet} {
    padding: 11px 16px 10px;
    font-size: ${p => p.theme.fontSizes.fs16};
    line-height: 1.66;
  }
`;

export const BirthInput = styled(Field)`
  opacity: 0;
  position: absolute;
  z-index: -1;
  overflow: hidden;
`;

export const BirthDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.radii.br20};
  border: none;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  padding: 11px 14px 12px;
  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.auth};
  border-radius: ${p => p.theme.radii.br20};
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.fw400};
  font-size: ${p => p.theme.fontSizes.fs14};
  line-height: 1.36;
  @media ${device.tablet} {
    padding: 11px 16px 10px;
    font-size: ${p => p.theme.fontSizes.fs16};
    line-height: 1.66;
  }
`;

export const CommentTextarea = styled.textarea`
  height: 100px;
  padding: 12px 14px 11px;
  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.auth};
  border-radius: ${p => p.theme.radii.br20};
  @media ${device.tablet} {
    padding: ${p => p.theme.space[2]}px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
  margin-top: ${p => p.theme.space[5]}px;
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: center;
    gap: ${p => p.theme.space[3]}px;
  }
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: -15px;
  left: 0px;
  font-size: 12px;
  line-height: 1.36;
  color: rgb(255, 97, 1);
  @media ${device.tablet} {
    bottom: -20px;
    font-size: 14px;
  }
`;

export const BtnActive = styled.button`
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  background: ${p => p.theme.colors.accent};
  border: ${p => p.theme.borders.main};
  border-radius: ${p => p.theme.radii.br40};
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs16};
  line-height: 1.375;
  letter-spacing: 0.04em;
  outline: none;
  color: ${p => p.theme.colors.white};
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.hoverAccent};
  }
  @media ${device.tablet} {
    width: 180px;
    font-size: ${p => p.theme.fontSizes.fs20};
    line-height: 1.35;
  }
`;

export const Btn = styled.button`
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  background: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.main};
  border-radius: ${p => p.theme.radii.br40};
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs16};
  line-height: 1.375;
  letter-spacing: 0.04em;
  outline: none;
  color: ${p => p.theme.colors.mainText};
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
  }
  @media ${device.tablet} {
    width: 180px;
    font-size: ${p => p.theme.fontSizes.fs20};
    line-height: 1.35;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  padding: 9px;
  background-color: ${props => props.theme.colors.background};
  backdrop-filter: blur(2px);
  border-radius: ${props => props.theme.radii.round};
  border: none;
  cursor: pointer;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
  }
`;

export const UploadLabel = styled.label`
  display: inline-flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
`;

export const UploadDiv = styled.div`
  width: 208px;
  height: 208px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.radii.br20};
  border: none;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border: 1px ${props => props.theme.colors.accent} solid;
  }

  @media ${device.tablet} {
    width: 182px;
    height: 182px;
  }
`;

export const UploadInput = styled(Field)`
  opacity: 0;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  width: 0.4px;
  height: 0.4px;
`;
