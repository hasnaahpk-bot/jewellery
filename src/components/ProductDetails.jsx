


import { useParams } from "react-router-dom";
import { PRODUCTS } from "../constants/Products";
import ProductGallery from "./ProductGallery";
import ProductDetailsPanel from "./ProductDetailsPanel";
import RecentSearched from "./RecentSearched";

const ProductDetails = () => {
  const { id } = useParams();

  // 🔴 CRITICAL: convert id to Number
  const product = PRODUCTS.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Product not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ProductGallery product={product} />
          <ProductDetailsPanel product={product} />
        </div>
          <RecentSearched/>

      </div>
    </main>
  );
};

export default ProductDetails;
