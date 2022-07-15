import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    position:absolute;
    padding-top: 10px;
  `}
`;

export const Logo = styled.div`
  margin-left:10px;
 img {
  height:40px;
 }
`
