import "./MenuList.css";
import {Link} from "react-router-dom"

export function NavMenuList() {
  return (
    <>
      <ul className="flex items-center gap-5 text-[13px]">
        <li>
          <Link to="#" className="nav-menu-list-item hover:text-gray-700 transition-colors">Categorías</Link>
        </li>
        <li>
          <Link to="#" className="nav-menu-list-item hover:text-gray-700 transition-colors">Ofertas</Link>
        </li>
        <li>
          <Link to="#" className="nav-menu-list-item hover:text-gray-700 transition-colors">Cupones</Link>
        </li>
        <li>
          <Link to="#" className="nav-menu-list-item hover:text-gray-700 transition-colors">Supermercado</Link>
        </li>
        <li>
          <Link to="#" className="nav-menu-list-item hover:text-gray-700 transition-colors">Moda</Link>
        </li>
        <li>
          <Link to="#" className="nav-menu-list-item hover:text-gray-700 transition-colors">
            Mercado Play
            <span>
              gratis
            </span>
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-menu-list-item hover:text-gray-700 transition-colors">Vender</Link>
        </li>
        <li>
          <Link to="#" className="nav-menu-list-item hover:text-gray-700 transition-colors">Ayuda</Link>
        </li>
      </ul>
    </>
  );
}
