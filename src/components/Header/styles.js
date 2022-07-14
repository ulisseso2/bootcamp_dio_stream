import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

`;
export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white}
  `}
`
