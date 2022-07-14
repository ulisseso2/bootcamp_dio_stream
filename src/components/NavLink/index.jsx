import P from 'prop-types';
import * as Styled from './styles';

export const NavLink = () => {
  return (
  <Styled.Container>
    <ul>
      <li>Início</li>
      <li>Filmes</li>
      <li>Séries</li>
    </ul>
  </Styled.Container>
  );
};

NavLink.propTypes = {
  links: P.node.isRequired,
};
