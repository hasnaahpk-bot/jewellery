import { createContext, useContext, useState } from "react";

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
  setWishlist((prev) => {
    const pid = Number(product.id);
    if (prev.some((item) => Number(item.id) === pid)) {
      return prev;
    }
    return [...prev, { ...product, id: pid }];
  });
};

const removeFromWishlist = (id) => {
  const pid = Number(id);
  setWishlist((prev) =>
    prev.filter((item) => Number(item.id) !== pid)
  );
};

const isWishlisted = (id) => {
  const pid = Number(id);
  return wishlist.some((item) => Number(item.id) === pid);
};


  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isWishlisted }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
