import P from 'prop-types';
import * as Styled from './styles';

export const MainMovie = ({ children, background }) => {
  return <Styled.Container background={background}>{children}</Styled.Container>;
};

MainMovie.propTypes = {
  children: P.node.isRequired,
  background: P.node.isRequired,
};
