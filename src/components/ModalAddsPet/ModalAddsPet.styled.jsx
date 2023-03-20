import { device } from 'devices';
import { Form, Field } from 'formik';
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
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 280px;
  padding: ${p => p.theme.space[5]}px ${p => p.theme.space[3]}px;

  /* display: flex;
  flex-direction: column;
  align-items: center; */

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
  font-size: ${p => p.theme.fontSizes.fs36};
  line-height: 1.36;
  color: ${p => p.theme.colors.mainText};
`;

export const Text = styled.div`
  text-align: center;
  font-family: ${p => p.theme.fonts.main};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs16};
  line-height: 1.1;
  color: ${p => p.theme.colors.mainText};
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[1]}px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[0]}px;
`;

export const Input = styled(Field)`
  padding: 12px 14px 11px;
  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.auth};
  border-radius: ${p => p.theme.radii.br20};
`;

export const CommentInput = styled.textarea`
  height: 100px;
  padding: 12px 14px 11px;
  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.auth};
  border-radius: ${p => p.theme.radii.br20};
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
  margin-top: ${p => p.theme.space[5]}px;
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
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
  }
`;
