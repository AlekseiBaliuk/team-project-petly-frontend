import styled from 'styled-components';
import { device } from '../../devices';
import { ReactComponent as Search } from '../../staticImages/Search.svg';
import { ReactComponent as Close } from '../../staticImages/SearchClose.svg';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 280px;
  height: 40px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.br20};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  overflow: hidden;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.tablet} {
    max-width: 608px;
    height: 44px;
    margin-bottom: ${p => p.theme.space[5]}px;
  }

  :focus-within {
    border: ${p => p.theme.borders.auth};
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fonts.fw500};
  font-size: ${p => p.theme.fontSizes.fs20};
  line-height: 1.2;
  color: ${p => p.theme.colors.searchText};
  padding-left: 12px;
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  padding: 0;
  background-color: ${p => p.theme.colors.white};
  cursor: pointer;
  outline: none;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    :disabled {
      fill: ${p => p.theme.colors.mainText};
    }
    fill: ${p => p.theme.colors.accent};
  }
`;

export const SearchIcon = styled(Search)``;

export const SearchCloseIcon = styled(Close)`
  fill: ${p => p.theme.colors.white};
  stroke: ${p => p.theme.colors.mainText};

  :hover,
  :focus {
    stroke: ${p => p.theme.colors.accent};
  }
`;
