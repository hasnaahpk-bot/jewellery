


import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { useWishlist } from "../Context/WishlistContext";

const ProductGallery = ({ product }) => {
  if (!product) return null;

  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();
  const isFav = isWishlisted(product.id);

  return (
    <section className="relative bg-[#0f0f0f] rounded-xl border border-[#4D4D33] p-4 sm:p-6 flex flex-col sm:flex-row gap-4 h-auto sm:h-[520px]">
      
      {/* ❤️ FAV ICON */}
      <button
        onClick={() =>
          isFav
            ? removeFromWishlist(product.id)
            : addToWishlist(product)
        }
        className="absolute top-4 right-4 text-[#d6ff3f] z-10"
      >
        {isFav ? <BiSolidHeart size={22} /> : <BiHeart size={22} />}
      </button>

      {/* THUMBNAILS */}
      <div className="flex sm:flex-col gap-3 justify-center sm:justify-start">
        <button className="w-12 h-12 border border-white/40 rounded flex items-center justify-center">
          <img src={product.img} alt={product.name} className="object-contain" />
        </button>

        <button className="w-12 h-12 border border-white/40 bg-white rounded flex items-center justify-center">
          <img src={product.img} alt={product.name} className="object-contain" />
        </button>
      </div>

      

      {/* MAIN IMAGE */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={product.img}
          alt={product.name}
          className="w-[180px] sm:w-[260px] lg:w-[320px] object-contain"
        />
      </div>
    </section>
  );
};

export default ProductGallery;
