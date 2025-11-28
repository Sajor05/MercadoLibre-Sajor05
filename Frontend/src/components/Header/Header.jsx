import "./Header.css";
import { SearchBar } from "./Header_components/SearchBar/Search";
import { NavMenuList } from "./Header_components/Nav-menu-list/MenuList";
import { NavUserMenuList } from "./Header_components/Nav-user-menu/UserMenuList";
import { Logo } from "./Header_components/LogoTipo/Logo";
import { Envios_Gratis_Logo } from "./Header_components/envios/Envio_logo.jsx";

export function Header() {
  return (
    <>
      <header className="page-header-container">
        <div className="grid grid-cols-[auto_1fr_auto] gap-2 px-5 py-2 w-full">
          <Logo></Logo>
          <SearchBar></SearchBar>
          <Envios_Gratis_Logo></Envios_Gratis_Logo>
          <div>Ubicacion</div>
          <NavMenuList></NavMenuList>
          <NavUserMenuList></NavUserMenuList>
        </div>
      </header>
    </>
  );
}
