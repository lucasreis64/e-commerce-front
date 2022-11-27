import { Categorias, IconeExcluir, MinhaContaStyled } from "./MinhaContaStyled";
import iconeExcluir from "../../img/Cancel.png";
import { Link } from "react-router-dom";

export default function MinhaConta({ active }) {
  const closeMyAccount = () => {
    active(false);
  };
  return (
    <MinhaContaStyled myaccount={active}>
      <Categorias>
        <IconeExcluir>
          <img src={iconeExcluir} onClick={closeMyAccount} />
        </IconeExcluir>
        <p>Minha conta</p>
        <Link to="/sign-in">
          <p>Fazer Login</p>
        </Link>
      </Categorias>
    </MinhaContaStyled>
  );
}
