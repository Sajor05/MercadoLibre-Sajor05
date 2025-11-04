import "./MenuList.css";

export function NavMenuList() {
  return (
    <>
      <ul className="flex gap-4 text-xs">
        <li>
          <a href="#">Categorías</a>
        </li>
        <li>
          <a href="#">Ofertas</a>
        </li>
        <li>
          <a href="#">Cupones</a>
        </li>
        <li>
          <a href="#">Supermercado</a>
        </li>
        <li>
          <a href="#">Moda</a>
        </li>
        <li>
          <a href="#">Mercado Play</a>
        </li>
        <li>
          <a href="#">Vender</a>
        </li>
        <li>
          <a href="#">Ayuda</a>
        </li>
      </ul>
    </>
  );
}
