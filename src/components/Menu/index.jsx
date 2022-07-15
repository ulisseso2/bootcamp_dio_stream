import * as Styled from './styles';
import { NavLink } from '../NavLink';
import { Login } from '../MenuLogin';
export const Menu = () => {
  return (
    <Styled.Container>
      <Styled.Logo><img src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'/></Styled.Logo>
      <NavLink />
      <Login />
    </Styled.Container>
  );
};
