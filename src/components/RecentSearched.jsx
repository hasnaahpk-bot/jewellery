import Ring1 from "../assets/images/ring1.svg";
import Ring2 from "../assets/images/ring2.svg";
import Earring1 from "../assets/images/earring1.svg";
import Earring2 from "../assets/images/earring2.svg";
import Earring3 from "../assets/images/earring3.svg";

const items = [
  { id: 1, name: "Emerald earrings", sku: "18040", price: 20000, oldPrice: 22000, img: Ring1 },
  { id: 2, name: "Emerald earrings", sku: "18040", price: 20000, oldPrice: 22000, img: Ring2 },
  { id: 3, name: "Emerald earrings", sku: "18040", price: 20000, oldPrice: 22000, img: Earring1 },
  { id: 4, name: "Emerald earrings", sku: "18040", price: 20000, oldPrice: 22000, img: Earring2 },
  { id: 5, name: "Emerald earrings", sku: "18040", price: 20000, oldPrice: 22000, img: Earring3 },
  { id: 6, name: "Emerald earrings", sku: "18040", price: 20000, oldPrice: 22000, img: Ring2 },
];

const RecentSearched = () => {
  return (
    <section className="bg-[#0f0f0f] px-4 py-6">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-white">Recent Searched</h2>
          <p className="text-xs text-gray-500">234 New item added</p>
        </div>

        {/* Scroll Row */}
        <div className="flex flex-nowrap gap-4 overflow-x-auto no-scrollbar">
          {items.map((item) => (
            <div
              key={item.id}
              className="
                shrink-0
                w-[220px] sm:w-[240px]
                h-[360px]
                bg-gradient-to-b from-[#0f0f0f] to-black
                border border-[#6b7014]
                rounded-xl
                p-4
                flex flex-col items-center text-center
              "
            >
             {/* IMAGE WITH EMERALD GLOW */}
<div className="relative mb-4 group">
  {/* GLOW */}
  <div
    className="
      absolute inset-0
      rounded-full
      bg-[radial-gradient(circle,rgba(182,196,63,0.35)_0%,rgba(182,196,63,0.15)_35%,transparent_70%)]
      blur-2xl
      scale-110
      opacity-70
      group-hover:opacity-100
      transition-all duration-300
    "
  />

  {/* IMAGE */}
  <img
    src={item.img}
    alt={item.name}
    className="
      relative z-10
    
      object-contain
      transition-transform duration-300
      group-hover:scale-105
    "
  />
</div>


              {/* DETAILS */}
              <p className="text-sm text-gray-200 py-2">{item.name}</p>
              <p className="text-xs text-gray-500 mb-3">SKU: {item.sku}</p>

              <div className="flex gap-2 items-center py-4">
                <span className="text-[#d6df63] font-semibold">
                  ₹{item.price}
                </span>
                <span className="text-gray-500 text-sm line-through">
                  ₹{item.oldPrice}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecentSearched;
