import styled from 'styled-components';

export const CategoriesList = styled('ul')`
  display: flex;
`;

export const CategoryItem = styled('li')`
  :not(:last-child) {
    margin-right: 12px;
  }
`;

export const Button = styled('button')`
  font-size: ${props => props.theme.fontSizes.fs20};
  font-weight: ${props => props.theme.fontWeights.fw500};
  line-height: 1.35;
  letter-spacing: 0.04;

  cursor: pointer;
  padding: 10px 28px;
  background-color: ${props => props.theme.colors.white};
  border: ${props => props.theme.borders.main};
  border-color: ${props => props.theme.colors.accent};
  border-radius: 40px;

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
  }
`;
