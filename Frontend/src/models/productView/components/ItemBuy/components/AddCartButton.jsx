export const AddCartButton = ({product}) => {
  return (
          <div className="mt-5">
            <button className="add-cart-button p-3 rounded-lg bg-[#4189e626] w-[275px] h-[45px] cursor-pointer font-bold">
              <span className="text-[#3483fa]">Agregar al carrito</span>
            </button>
          </div>
        )
}