import Ring1 from "../assets/images/ring1.svg"
import Ring2 from "../assets/images/ring2.svg"
import Earring1 from "../assets/images/earring1.svg"
import Earring2 from "../assets/images/earring2.svg"
import { BiHeart } from "react-icons/bi"


const Newarrivals = () => {
const newArrivals = [
  {
    id: 1,
    name: "Diamond ring",
    sku: "SKU: 18037",
    price: "27000",
    img: Ring1,
  },
  {
    id: 2,
    name: "Diamond ring",
    sku: "SKU: 18037",
    price: "27000",
    img: Ring2,
  },
  {
    id: 3,
    name: "Diamond ring",
    sku: "SKU: 18037",
    price: "27000",
    img: Earring1,
  },
  {
    id: 4,
    name: "Diamond ring",
    sku: "SKU: 18037",
    price: "27000",
    img: Earring2,
  },
];

  return (
    <div className="bg-[#0f0f0f] py-10">
  <div className="max-w-7xl mx-auto px-4">
    
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-xl font-semibold text-white">
          New Arrivals
        </h2>
        <p className="text-xs text-gray-400">
          234 New item added
        </p>
      </div>

      <button className="text-sm text-white hover:underline">
        See all
      </button>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {newArrivals.map((item) => (
        <div
          key={item.id}
          className="bg-[#141414] rounded-xl p-4 relative"
        >
          <button className="absolute top-3 right-3 text-gray-300">
            <BiHeart/>
          </button>

          <div className="h-40 flex items-center justify-center mb-4">
            <img
              src={item.img}
              alt={item.name}
              className="max-h-full object-contain"
            />
          </div>

          <div className="text-white text-sm">
            <p className="font-medium">{item.name}</p>
            <p className="text-xs text-gray-400">{item.sku}</p>
          </div>

          <p className="text-white font-semibold mt-2">
            ₹{item.price}
          </p>

          <div className="flex items-center gap-2 mt-3">
            <button className="flex-1 bg-lime-400 text-black text-xs font-semibold py-2 rounded-md">
              ADD TO CART
            </button>

            <button className="w-9 h-9 border border-lime-400 rounded-md flex items-center justify-center text-lime-400">
               <BiHeart/>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default Newarrivals
