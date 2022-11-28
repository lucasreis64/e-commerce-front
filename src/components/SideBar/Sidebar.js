import React from "react";
import { Categorias, IconeExcluir, SideBarStyled } from "./SideBarStyled";
import iconeExcluir from "../../img/Cancel.png";
import { Link } from "react-router-dom";

export default function SideBar({ active }) {
  const closesidebar = () => {
    active(false);
  };

  return (
    <>
      <SideBarStyled sidebar={active}>
        <IconeExcluir>
          <img onClick={closesidebar} src={iconeExcluir} />
        </IconeExcluir>

        <Categorias>
          <Link to="/categoria/celular">
            <h1> Smarthphones </h1>
          </Link>
          <Link to="/categoria/notebooks">
            <h1> Notebooks</h1>
          </Link>
          <Link to="/categoria/games">
            <h1> PC Gamer</h1>
          </Link>
          <Link to="/categoria/tv">
            {" "}
            <h1>TV</h1>
          </Link>
          <Link to="/categoria/hardware">
            <h1>Outros</h1>
          </Link>
        </Categorias>
      </SideBarStyled>
    </>
  );
}
