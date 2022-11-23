import { NavbarStyled } from "./NavBarStyled";
import menuIcon from "../../img/menuIcon.png"
import darkmodeIcon from "../../img/darkmodeIcon.png"
import userIcon from "../../img/userIcon.png"
import logoescrita from "../../img/logoEscrita.png"
import cartIcon from "../../img/cartIcon.png"


export default function NavBar(){
    return (
      <NavbarStyled>
        <img className="menuicon" src={menuIcon}></img>
        <img className="logoicon" src={logoescrita}></img>
        <img className="darkmodeicon" src={darkmodeIcon}></img>
        <img className="usericon" src={userIcon}></img>
        <img className="carticon" src={cartIcon}></img>
      </NavbarStyled>
    );
}