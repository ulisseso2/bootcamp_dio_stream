import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;

    @media ${theme.font.media.ltmedium} {
      flex-flow: column wrap;
      align-content: center;
    }
    ul {
      display: flex;

    }
    li {
      padding:${theme.spacings.xsmall};
      color: ${theme.colors.white}
    }
  `}
`;
