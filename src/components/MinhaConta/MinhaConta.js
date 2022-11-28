import { Categorias, IconeExcluir, MinhaContaStyled } from "./MinhaContaStyled";
import iconeExcluir from "../../img/Cancel.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { contexto } from "../../context/context";

export default function MinhaConta({ active }) {
  const navigate = useNavigate();
  const { token, setToken } = useContext(contexto);

  const logOut = () => {
    localStorage.clear("userInfo");
    setToken(null);
    navigate("/");
  };

  const closeMyAccount = () => {
    active(false);
  };
  return (
    <MinhaContaStyled myaccount={active}>
      <Categorias>
        <IconeExcluir>
          <img src={iconeExcluir} onClick={closeMyAccount} />
        </IconeExcluir>
        {token ? (
          <>
            <Link to="/myaccount">
              <p>Minha conta</p>
            </Link>
            <p onClick={logOut}>Sair</p>
          </>
        ) : (
          <>
            <Link to="/sign-in">
              <p>Fazer Login</p>
            </Link>
          </>
        )}
      </Categorias>
    </MinhaContaStyled>
  );
}
