import * as Styled from './styles';
import P from 'prop-types';
import { Menu } from '../Menu';

export const Header = () => {
  return (
    <Styled.Container>
      <Menu/>
    </Styled.Container>
  );
}
Header.propTypes = {
  children: P.node.isRequired,
};
