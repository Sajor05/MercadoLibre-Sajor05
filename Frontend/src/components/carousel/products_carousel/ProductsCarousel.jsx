import { useProducts } from "../../../hooks/ProductHook"
import { ProductCard } from "../../../models/product/ProductCard"
import { Recommendation_carousel } from "../Recommendation_carrousel"

export function CarAccesoryCarousel() {
  const products = useProducts()
  const categoryProducts = products.filter((e) => e.category.principalCategory === "Accesorios para Vehículos")
  return (
    <section className="flex justify-center p-5">
      <Recommendation_carousel>
        {categoryProducts.map((art, i) => (
          <div
            key={i}
            className="ProductCardModels-card flex-shrink-0 w-[190px] h-[290px]"
          >
            <ProductCard product={art}/>
          </div>
        ))}
      </Recommendation_carousel>
    </section>
  )
}

export function ConsoleCarousel() {
  const products = useProducts()
  const categoryProducts = products.filter((e) => e.category.principalCategory === "Consolas y Videojuegos")
  return (
    <section className="flex justify-center p-5">
      <Recommendation_carousel>
        {categoryProducts.map((art, i) => (
          <div
            key={i}
            className="ProductCardModels-card flex-shrink-0 w-[190px] h-[290px]"
          >
            <ProductCard product={art}/>
          </div>
        ))}
      </Recommendation_carousel>
    </section>
  )
}