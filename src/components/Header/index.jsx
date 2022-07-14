import * as Styled from './styles';
import P from 'prop-types';
import { Menu } from '../Menu';

export const Header = () => {
  return (
    <Styled.Container>
      <Styled.Title>ULIFLIX</Styled.Title>
      <Menu/>
    </Styled.Container>
  );
}
Header.propTypes = {
  children: P.node.isRequired,
};
