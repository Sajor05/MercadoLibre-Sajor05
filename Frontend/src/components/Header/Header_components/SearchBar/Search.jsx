import "./Search.css";

export function SearchBar() {
  return (
    <>
      <div className="searchBar shadow-md h-10">
        <input type="text" placeholder="Buscar  productos, marcas y más..." />
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
