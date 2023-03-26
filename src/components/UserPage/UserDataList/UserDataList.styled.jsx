import styled from 'styled-components';
import plusUser from 'staticImages/userPage/plusUser.svg';

export const AvatarInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 34px;
  @media screen and (min-width: 1280px) {
    position: relative;
  }
`;
export const FormWrapper = styled.form`
  margin: 0 auto;
`;

export const AvatarImg = styled.img`
  background-image: url(${plusUser});
  background-color: ${p => p.theme.colors.background};
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  border-radius: ${p => p.theme.radii.round};
  width: 233px;
  height: 233px;
  max-width: none;
  margin: auto auto 12px;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const LabelEditPhoto = styled.button`
  display: flex;
  justify-content: flex-start;
  line-height: 1.83;
  margin-left: auto;
  cursor: pointer;
  padding: 5px 10px 5px 5px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw400};
  font-size: ${p => p.theme.fontSizes.fs12};
  align-items: center;
  letter-spacing: 0.04em;
  border: none;
  background-color: inherit;

  img ~ &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    bottom: 0;
    right: -60px;
    padding: 0;
  }
`;

export const InputEditPhoto = styled.input`
  display: none;
`;

export const SVG = styled.img`
  margin-right: 4px;
  width: 20px;
  height: 20px;
  transition: 0.2s;
`;
export const UserInfoList = styled.ul`
  position: relative;
  display: block;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 100%;
    margin-right: 52px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 0;
  }
`;

export const UserInfoItem = styled.li`
  display: flex;
  align-items: baseline;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const UserInfoTitle = styled.p`
  width: 1px;
  margin-right: 10px;
  margin-bottom: 12px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.fw500};
  font-size: ${p => p.theme.fontSizes.fs12};
  line-height: 1.33;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.fs18};
    line-height: 1.38;
  }
`;
