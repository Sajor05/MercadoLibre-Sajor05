import "./Navbar.css";
import { SearchBar } from "./components/SearchBar/Search.jsx";
import { Locate } from "./components/Ubicacion/Ubicacion.jsx";
import { NavMenuList } from "./components/Nav-menu-list/MenuList.jsx";
import { NavUserMenuList } from "./components/Nav-user-menu/UserMenuList.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Logotipo from "./assets/Logotipo.png";
import Envios from "./assets/envios_logo.webp";

export const Logo = () => {
  return (
    <NavLink to="/" className="flex justify-end items-center px-6 py-2">
      <img src={Logotipo} alt="Mercado libre" className="w-32 h-8" />
    </NavLink>
  );
}


export const Envios_Gratis_Logo = () => {
  return (
    <NavLink to="/" className="flex justify-start items-center">
      <img src={Envios} alt="Envios gratis" className="w-75 h-9" />
    </NavLink>
  );
}


export const Navbar = () => {

  return (
    <nav className="bg-[#ffe600] w-full py-2 px-4 flex justify-center">
      <div className="max-w-[1200px] w-full grid grid-cols-[134px_1fr_auto] gap-x-7 gap-y-2">
        <div className="nav-branch w-2xl flex items-center">
          <Logo />
        </div>

        <div className="searchbar w-155">
          <SearchBar />
        </div>

        <div className="flex justify-end items-center">
          <Envios_Gratis_Logo />
        </div>

        <div className="flex items-center relative -top-1">
             <Locate />
        </div>

        <div className="flex items-end pb-1">
          <NavMenuList />
        </div>

        <div className="flex items-end justify-end pb-1">
          <NavUserMenuList />
          <NavLink to="/carrito">
            <FontAwesomeIcon className="cart-icon" icon={faCartShopping } style={{color: "#000000",}} />
          </NavLink>
        </div>

      </div>
    </nav>
  );
}
