


import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { PRODUCTS } from "../constants/Products";

const Newarrivals = () => {
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();

  // ✅ only first 4 newest products
  const newArrivals = [...PRODUCTS]
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <section className="bg-[#0f0f0f] py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="flex justify-between mb-5">
          <div>
            <h2 className="text-white text-xl font-semibold">New Arrivals</h2>
            <p className="text-xs text-gray-400">234 New item added</p>
          </div>
          <button
            onClick={() => navigate("/seeall")}
            className="text-white text-sm"
          >
            See all
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {newArrivals.map((item) => {
            const isFav = isWishlisted(item.id);
            const isInCart = cart.some((p) => p.id === item.id);

            return (
              <div
                onClick={() => navigate(`/product/${item.id}`)}
                key={item.id}
                className="relative bg-[#0b0b0b] border border-[#d6ff3f]/25 rounded-xl p-3 h-[340px]"
              >
                {/* WISHLIST */}
                <button
  onClick={(e) => {
    e.stopPropagation();
    isFav
      ? removeFromWishlist(item.id)
      : addToWishlist(item);
  }}
  className="absolute top-4 right-4 text-[#d6ff3f] z-10"
>
  {isFav ? <BiSolidHeart size={22} /> : <BiHeart size={22} />}
</button>

                {/* IMAGE */}
                <div className="relative flex items-center justify-center h-[180px] mb-4 overflow-hidden">
                  <div
                    className="absolute inset-0 rounded-xl
                    bg-[radial-gradient(ellipse_at_center,rgba(214,255,63,0.07)_0%,rgba(0,0,0,0)_70%)]
                    pointer-events-none"
                  />
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* INFO */}
                <div className="flex justify-between text-white text-sm">
                  <div>
                    <p>{item.name}</p>
                    <p className="text-xs text-gray-400">SKU: {item.sku}</p>
                  </div>
                  <p className="font-semibold mt-4">₹{item.price}</p>
                </div>

                {/* CART */}
                <button
  onClick={(e) => {
    e.stopPropagation();
    !isInCart && addToCart(item);
  }}

                  className={`mt-4 w-full py-2 rounded-md text-xs font-semibold
                    ${
                      isInCart
                        ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                        : "bg-[#d6ff3f] text-black"
                    }`}
                >
                  {isInCart ? "ADDED" : "ADD TO CART"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Newarrivals;
