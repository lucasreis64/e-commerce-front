import { Categorias, IconeExcluir, MinhaContaStyled } from "./MinhaContaStyled";
import iconeExcluir from "../../img/Cancel.png";

export default function MinhaConta({active}){
     const closeMyAccount = () => {
       active(false);
     };
    return (
      <MinhaContaStyled myaccount = {active}>
        <Categorias>
          <IconeExcluir>
            <img src={iconeExcluir} onClick ={closeMyAccount} />
          </IconeExcluir>
          <p>Minha conta</p>
          <p>Logout</p>
        </Categorias>
      </MinhaContaStyled>
    );
}