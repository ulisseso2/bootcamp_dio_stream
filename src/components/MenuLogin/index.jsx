import * as Styled from './styles';
import { FaSearch, FaBell, FaUser } from "react-icons/fa";

export const Login = () => {
  return (
    <Styled.Container>
      <h3><FaSearch/></h3>
      <h3><FaBell /></h3>
      <h3><FaUser /></h3>
    </Styled.Container>
  );
};

