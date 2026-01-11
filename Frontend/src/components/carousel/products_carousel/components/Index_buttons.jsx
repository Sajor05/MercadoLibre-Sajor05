export const Index_buttons = ({product}) => {
  return(
    <header className="related_history-header-container flex justify-between">
      <h3 className="font-bold">{product.category.principalCategory}</h3>
      <ul className="flex gap-3">
        <li>
          <button
            type="button"
            className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-white cursor-pointer"
          ></button>
        </li>
        <li>
          <button
            type="button"
            className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-white cursor-pointer"
          ></button>
        </li>
        <li>
          <button
            type="button"
            className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-blue-200 cursor-pointer"
          ></button>
        </li>
        <li>
          <button
            type="button"
            className="p-1 rounded-full shadow bg-gray-200 text-gray-800 hover:bg-white cursor-pointer"
          ></button>
        </li>
      </ul>
    </header>    
  );
}