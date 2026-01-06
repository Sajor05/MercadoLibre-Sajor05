import { useState } from "react";

export const ProductGallery = ({images}) => {
  

  // Estado para la imagen activa (por defecto la primera)
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-2xl">
      
      {/* Columna de Miniaturas (Izquierda) */}
      <div className="flex flex-row md:flex-col gap-3 order-2 md:order-1">
        {images.map((img, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveImage(img)} // O usa onClick si prefieres clic
            className={`
              w-16 h-16 
              rounded-md 
              overflow-hidden 
              cursor-pointer 
              border-2 
              p-1
              transition-all
              ${activeImage === img 
                ? 'border-blue-500' // Borde Azul activo (Estilo ML)
                : 'border-gray-300 hover:border-gray-300' // Borde inactivo
              }
            `}
          >
            <img 
              src={img} 
              alt={`Vista ${index}`} 
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Imagen Principal (Derecha) */}
      <div className="flex-1 relative h-[400px] flex items-center justify-center order-1 md:order-2 overflow-hidden">
        <img
          src={activeImage}
          alt="Producto Principal"
          className="max-w-full max-h-full object-contain animate-fade-in cursor-zoom-in"
        />
      </div>

    </div>
  );
};
