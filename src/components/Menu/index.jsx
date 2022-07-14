import P from 'prop-types';
import * as Styled from './styles';
import { NavLink } from '../NavLink';
export const Menu = ({ children }) => {
  return (
    <Styled.Container>
      <NavLink />
      {children}
    </Styled.Container>
  );
};

Menu.propTypes = {
  children: P.node.isRequired,
};
