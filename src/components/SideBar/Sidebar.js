import { Categorias, SideBarStyled } from "./SideBarStyled";

export default function SideBar() {
  return (
    <>
      <SideBarStyled>
        <Categorias>
          <h1> Smarthphones </h1>
          <h1> Notebooks</h1>
          <h1> PC Gamer</h1>
          <h1>TV</h1>
        </Categorias>
      </SideBarStyled>
    </>
  );
}
