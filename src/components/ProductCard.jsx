import React from "react";
import { useNavigate } from "react-router-dom";

const glowMap = {
  Rings: "from-lime-500/30",
  Earrings: "from-lime-500/30",
  Necklace: "from-gray-300/35",
  Bracelet: "from-gray-300/35",
};

const ProductCard = ({ item }) => {
  if (!item) return null;
    const navigate = useNavigate();


  const glow = glowMap[item.category] ?? "from-transparent";

  return (
    <div
      className="
        relative rounded-2xl bg-[#121212] p-4
        shadow-[8px_4px_8px_0px_rgba(88,92,95,0.16)]
        h-auto sm:h-[350px]
      "
    >
      {/* IMAGE */}
      <div
        className="
          relative z-10 flex items-center justify-center
          h-32 sm:h-40
        "
      >
        {/* GLOW */}
        <div
          className={`
            pointer-events-none absolute inset-6
            rounded-full bg-radial-gradient
            ${glow} to-transparent
            blur-xl opacity-60
          `}
        />

        <img                 onClick={() => navigate(`/product/${item.id}`)}

          src={item.img}
          alt={item.name}
          className="
            max-h-full object-contain
            transition-transform duration-300
            sm:hover:scale-105
          "
        />
      </div>

      {/* INFO */}
      <div
        className="
          relative z-10 mt-3 sm:mt-4
          flex flex-col items-center
          gap-y-2 sm:gap-y-3
          py-3 sm:py-4
          text-center
        "
      >
        <h3 className="text-sm font-medium text-white leading-tight">
          {item.name}
        </h3>

        <span className="text-xs sm:text-sm text-gray-400 font-thin">
          SKU: {item.sku}
        </span>

        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-white">
            ₹{item.price}
          </span>
          <span className="text-xs text-gray-500 font-thin line-through">
            ₹{item.old}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
