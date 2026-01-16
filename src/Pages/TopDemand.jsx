import Ring1 from "../assets/images/ring1.svg";
import Ring2 from "../assets/images/ring2.svg";
import Earring1 from "../assets/images/earring1.svg";
import Earring2 from "../assets/images/earring2.svg";
import Earring3 from "../assets/images/earring3.svg";
import Banner2 from "../assets/images/banner2.svg";

const TopDemanded = () => {
  const products = [
    { id: 1, name: "Emerald earrings", sku: "SKU: 18040", price: 20000, oldPrice: 22000, image: Ring1 },
    { id: 2, name: "Emerald earrings", sku: "SKU: 18040", price: 20000, oldPrice: 22000, image: Earring1 },
    { id: 3, name: "Silver bracelet", sku: "SKU: 18039", price: 8000, oldPrice: 9500, image: Earring2 },
    { id: 4, name: "Emerald earrings", sku: "SKU: 18040", price: 20000, oldPrice: 22000, image: Earring1 },
    { id: 5, name: "Emerald earrings", sku: "SKU: 18040", price: 20000, oldPrice: 22000, image: Ring2 },
    { id: 6, name: "Emerald earrings", sku: "SKU: 18040", price: 20000, oldPrice: 22000, image: Earring3 },
    { id: 7, name: "Emerald earrings", sku: "SKU: 18040", price: 20000, oldPrice: 22000, image: Ring1 },
    { id: 8, name: "Emerald earrings", sku: "SKU: 18040", price: 20000, oldPrice: 22000, image: Earring3 },
  ];

  return (
    <section className="bg-[#0f0f0f] py-12 px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold text-white">Top Demanded Items</h2>
        <p className="text-xs text-gray-400 mt-1">234 New item added</p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="
              relative
              rounded-2xl
              bg-[#0b0b0b]
              p-4
              border
              border-[#d6ff3f]/25
              overflow-hidden
              transition-transform
              h-[380px]
            "
          >
            {/* LOW inner glow (subtle, controlled) */}
            <div
              className="
                absolute
                inset-0
                rounded-2xl
                bg-[radial-gradient(ellipse_at_center,rgba(214,255,63,0.08)_0%,rgba(0,0,0,0)_70%)]
                pointer-events-none
              "
            />

            {/* Soft neon edge (not overpowering) */}
            <div
              className="
                absolute
                inset-0
                rounded-2xl
                ring-1
                ring-[#d6ff3f]/35
                pointer-events-none
              "
            />

            <img
              src={item.image}
              alt={item.name}
              className="mx-auto object-contain mb-4 relative z-10 hover:scale-105 "
            />

            <div className="text-center space-y-1 relative z-10">
              <p className="text-lg text-gray-200">{item.name}</p>
              <p className="text-sm text-gray-500">{item.sku}</p>

              <div className="flex justify-center py-4 gap-2 text-sm mt-2">
                <span className="text-[#d6ff3f] font-semibold">
                  ₹{item.price}
                </span>
                <span className="text-gray-500 line-through">
                  ₹{item.oldPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Banner */}
      <div className="w-full max-w-7xl mx-auto py-12">
        <img src={Banner2} alt="Banner" />
      </div>
    </section>
  );
};

export default TopDemanded;
