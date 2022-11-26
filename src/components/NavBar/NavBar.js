import { NavbarStyled, RightIcons } from "./NavBarStyled";
import menuIcon from "../../img/menuIcon.png";
import darkmodeIcon from "../../img/darkmodeIcon.png";
import userIcon from "../../img/userIcon.png";
import logoescrita from "../../img/logoEscrita.png";
import cartIcon from "../../img/cartIcon.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideBar from "../SideBar/Sidebar";

export default function NavBar() {
  const [sideBar, setSideBar] = useState(false);

    const showSidebar = () => setSideBar(true)
  

  return (
    <>
      <NavbarStyled>
        <img className="menuicon" alt="" src={menuIcon} onClick={showSidebar} />{" "}
        {sideBar && <SideBar active={setSideBar} />}
        <Link to="/">
          <img className="logoicon" alt="" src={logoescrita}></img>
        </Link>
        <RightIcons>
          <img className="darkmodeicon" alt="" src={darkmodeIcon}></img>
          <img className="usericon" alt="" src={userIcon}></img>
          <Link to="/carrinho">
            <img className="carticon" alt="" src={cartIcon}></img>
          </Link>
        </RightIcons>
      </NavbarStyled>
    </>
  );
}
