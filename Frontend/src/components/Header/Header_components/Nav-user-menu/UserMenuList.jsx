import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export function NavUserMenuList() {
  return (
    <>
      <ul className="flex gap-2 text-xs justify-center text-center pr-[200px]">
        <li>
          <Link to="/registrar">Creá tu cuenta</Link>
        </li>
        <li>
          <Link to="/iniciar-sesion" id="login">
            Ingresa
          </Link>
        </li>
        <li>
          <Link to="/cupones">Cupones</Link>
        </li>
        <li>
          <Link to="/carrito">Carrito</Link>
        </li>
      </ul>
    </>
  );
}
