import { useWishlist } from "../Context/WishlistContext";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center text-gray-400 text-sm">
        Wishlist is empty
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-4 sm:px-6 py-6">
      <h1 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
        My Wishlist
      </h1>

      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-[#0b0b0b] border border-gray-700 rounded-xl p-3 flex flex-col"
          >
            {/* IMAGE */}
            <div className="h-[140px] sm:h-[160px] flex items-center justify-center mb-3">
              <img
                src={item.img}
                alt={item.name}
                className="max-h-full object-contain"
              />
            </div>

            {/* INFO */}
            <div className="flex flex-col gap-1 text-sm">
              <p className="font-medium truncate">{item.name}</p>
              <p className="text-xs text-gray-400">{item.sku}</p>

              <p className="mt-2 font-semibold text-sm">
                ₹{item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
