import "./Search.css";

export function SearchBar() {
  return (
    <>
      <div className="searchBar shadow-md">
        <input type="text" placeholder="Buscar marcas, productos y mas..." />
        <div className="left-border">
          <div>
            <button className="cursor-pointer border-l-[0.5px] border-gray-300 p-2 text-center">
              ingresar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
