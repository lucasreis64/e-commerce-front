import { Categorias, IconeExcluir, MinhaContaStyled } from "./MinhaContaStyled";
import iconeExcluir from "../../img/Cancel.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { contexto } from "../../context/context";

export default function MinhaConta({ active }) {
  const navigate = useNavigate();
  const context = useContext(contexto);

  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem("userInfo"));
    context.setToken(isLoggedIn?.token);
  }, []);

  const logOut = () => {
    localStorage.clear("userInfo");
    context.setToken("");
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
        {context.token ? (
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
