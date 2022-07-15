import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    margin-right: 100px;

    @media ${theme.font.media.ltmedium} {
      flex-flow: column wrap;
      align-content: center;
    }
    ul {
      display: flex;

    }
    li {
      padding:${theme.spacings.xsmall};
      color: ${theme.colors.mediumGray};
      cursor: pointer;
    }
    li:hover {
      color: ${theme.colors.white}
    }
  `}
`;
