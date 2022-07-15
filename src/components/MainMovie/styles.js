import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-image: url();
    color: ${theme.colors.white}
  `}
`;
