import React from "react";
import { Categorias, IconeExcluir, SideBarStyled } from "./SideBarStyled";
import iconeExcluir from "../../img/Cancel.png";

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
          <h1> Smarthphones </h1>
          <h1> Notebooks</h1>
          <h1> PC Gamer</h1>
          <h1>TV</h1>
          <h1>Outros</h1>
        </Categorias>
      </SideBarStyled>
    </>
  );
}
