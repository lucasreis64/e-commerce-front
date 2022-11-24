import { NavbarStyled } from "./NavBarStyled";
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

    function handleClick(){
      
        setSideBar(true)
      
    }
  

  return (
    <>
    {sideBar ? <SideBar /> : null}
      <NavbarStyled>
        <img className="menuicon"  src={menuIcon} onClick={handleClick}></img>
        <img className="logoicon" src={logoescrita}></img>
        <img className="darkmodeicon" src={darkmodeIcon}></img>
        <img className="usericon" src={userIcon}></img>
        <Link to="/carrinho">
          <img className="carticon" src={cartIcon}></img>
        </Link>
      </NavbarStyled>
    </>
  );
}
