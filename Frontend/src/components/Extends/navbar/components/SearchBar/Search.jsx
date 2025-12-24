import "./Search.css";

export const SearchBar = () => {
  return (
    <div className="flex w-full bg-white shadow-sm items-center px-4 h-10">
      <input className="searchBar flex-grow outline-none text-sm placeholder-gray-400" type="text" placeholder="Buscar  productos, marcas y más..." />
      <button className="cursor-pointer border-l border-gray-200 pl-3 text-gray-500">
        <i className="fas fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
