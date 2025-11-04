import "./Header.css";
import { SearchBar } from "./Header_components/SearchBar/Search";
import { NavMenuList } from "./Header_components/Nav-menu-list/MenuList";
import { NavUserMenuList } from "./Header_components/Nav-user-menu/UserMenuList";
import Logo from "../../assets/Logo.jpg";
import Envio from "../../assets/envio_gratis.jpg";
export function Header() {
  return (
    <>
      <header className="page-header-container">
        <div className="grid grid-cols-3 gap-2 px-5 py-2">
          <div className="flex justify-end items-center px-6 py-2">
            <a href="#">
              <img src={Logo} alt="Mercado libre" className="w-32 h-8" />
            </a>
          </div>
          <div>
            <SearchBar></SearchBar>
          </div>
          <div className="flex justify-start items-center">
            <a href="#">
              <img src={Envio} alt="Envios gratis" className="w-auto h-12" />
            </a>
          </div>
          <div>Ubicacion</div>
          <div>
            <NavMenuList></NavMenuList>
          </div>
          <div>
            <NavUserMenuList></NavUserMenuList>
          </div>
        </div>
      </header>
    </>
  );
}
