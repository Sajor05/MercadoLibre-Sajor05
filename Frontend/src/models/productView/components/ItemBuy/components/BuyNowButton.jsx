import React from 'react'

export const BuyNowButton = ({product}) => {
  return (
        <div className="buy-now-container">
            <button className="buy-now-button p-3 rounded-lg bg-[#3483fa] w-[275px] h-[45px] cursor-pointer font-bold">
                <span className="text-white">Comprar ahora</span>
            </button>
        </div>
  )
}