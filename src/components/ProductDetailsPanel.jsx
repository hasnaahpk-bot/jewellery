import Bis from "../assets/images/bis.svg"
import Igi from "../assets/images/igi.svg"


const ProductDetailsPanel = ( {product}) => {
  return (
    <section className="text-white">

      {/* TITLE */}
      <h1 className="text-lg font-semibold mb-1">Trending</h1>

      

{/* DESCRIPTION */}
<p className="text-sm text-gray-400 leading-relaxed mt-2">
  {product
    ? `${product.name} in premium ${product.category} collection`
    : ""}
</p>

<p className="text-sm text-gray-500 mt-1">
  SKU: {product?.sku}
</p>

{/* PRICE */}
<div className="flex items-center gap-4 mt-4">
  <span className="text-2xl font-bold text-white">
    AED {product?.price}
  </span>

  <span className="text-xl text-gray-500 line-through">
    AED {product?.old}
  </span>
</div>

<p className="text-sm text-green-400 mt-1">
  Hurray! You have saved{" "}
  <span className="font-medium">
    AED {product ? product.old - product.price : 0}
  </span>
</p>




{/* AVAILABLE COLOURS */}
<div className="mt-6">
  <p className="text-sm text-gray-400 mb-3">Available Colours</p>

  <div className="flex gap-6">
    {[
      { name: "Rose gold", color: "#f6c1c1" },
      { name: "Gold", color: "#ffd86b" },
      { name: "Off White", color: "#f2f2f2" },
      { name: "Platinum", color: "#2b2b2b" },
    ].map((item) => (
      <div key={item.name} className="flex flex-col items-center gap-1">
        <div
          className="w-10 h-10 rounded"
          style={{ backgroundColor: item.color }}
        />
        <span className="text-xs text-gray-400">{item.name}</span>
      </div>
    ))}
  </div>
</div>

{/* ACTION BUTTONS */}
<div className="mt-8 flex gap-4">
  <button className="flex-1 py-3 rounded-full bg-[#d9ff00] text-black font-medium">
    Buy Now
  </button>
  <button className="flex-1 py-3 rounded-full border border-gray-400 text-white">
    Add to Cart
  </button>
</div>

{/* SIZE + QTY */}
<div className="mt-6 flex gap-6 ">

  {/* SELECT SIZE */}
  <div>
    <p className="text-sm text-gray-400 mb-2">Select Size</p>
    <select
      className="
        w-28 px-4 py-2
        rounded-md
        bg-black
        border border-gray-400
        text-sm text-white
        focus:outline-none
      "
    >
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
    </select>
  </div>

  {/* SELECT QTY */}
  <div>
    <p className="text-sm text-gray-400 mb-2">Qty</p>
    <select
      className="
        w-20 px-4 py-2
        rounded-md
        bg-black
        border border-gray-400
        text-sm text-white
        focus:outline-none
      "
    >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>
  </div>

</div>

      {/* GOLD PURITY */}
      {/* CHOOSE GOLD PURITY */}
<div className="mt-8 border-t border-[#2a2a2a] pt-6">
  <p className="text-sm font-semibold text-white mb-4">
    Choose Gold Purity
  </p>

  <div className="flex gap-8 items-start">
    {/* ACTIVE */}
    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 rounded-full bg-[#d9ff00] flex items-center justify-center text-black text-sm font-semibold">
        18KT
      </div>
      <span className="text-xs text-gray-400">2.480GM</span>
    </div>

    {/* INACTIVE */}
    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-400 text-sm font-semibold">
        24KT
      </div>
      <span className="text-xs text-gray-400">3.280GM</span>
    </div>
  </div>
</div>

      {/* DELIVERY AVAILABILITY */}
<div className="mt-8">
  <p className="text-sm font-semibold text-white mb-3">
    Delivery availability
  </p>

  <div className="flex gap-3 mb-3">
    <input
      value="670114"
      readOnly
      className="
        w-36
        px-4 py-2
        rounded-md
        bg-white
        text-gray-400
        text-sm
        outline-none
      "
    />

    <button className="px-6 py-2 rounded-md bg-[#d6d88c] text-black text-sm font-medium">
      Check Now
    </button>
  </div>

  <div className="space-y-2 text-sm text-gray-400">
    <p>✔ Standard delivery between <span className="text-white">24 Oct</span> & <span className="text-white">28 oct 2022</span></p>
    <p>✔ Cash / card delivery option available</p>
  </div>
</div>


     {/* CERTIFICATION */}
<div className="mt-10 border-t border-[#2a2a2a] pt-6">
  <p className="text-base font-medium text-white mb-6">
    Certification
  </p>

  <div className="flex gap-12">
    {/* BIS */}
    <div className="flex flex-col items-start gap-2">
      <img
        src={Bis}
        alt="BIS Hallmark"
        className="h-10 object-contain"
      />
      <p className="text-sm text-gray-400 leading-tight">
        Bis Hallmark
        <br />
        For Gold
      </p>
    </div>

    {/* IGI */}
    <div className="flex flex-col items-start gap-2">
      <img
        src={Igi}
        alt="IGI Certification"
        className="h-10 object-contain"
      />
      <p className="text-sm text-gray-400 leading-tight">
        IGI Certification
        <br />
        For Diamonds
      </p>
    </div>
  </div>
</div>

{/* PRODUCT DETAILS */}
<div className="mt-10 border-t border-[#2a2a2a] pt-6">
  <p className="text-base font-medium text-white mb-6">
    Product details
  </p>

  <div className="space-y-4 text-sm">
    <div className="flex justify-between">
      <span className="text-gray-400">Product ID</span>
      <span className="text-white">SKU 1245</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-400">Dimension</span>
      <span className="text-white">9 – 15.6 mm</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-400">Gold & KT</span>
      <span className="text-white">18 KT Yellow Gold</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-400">Gold Weight</span>
      <span className="text-white">12.460 GM</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-400">Diamond Weight</span>
      <span className="text-white">0.180 CT</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-400">Diamond</span>
      <span className="text-white">SII J</span>
    </div>
  </div>
</div>


      {/* RATINGS */}
      {/* RATING & REVIEW */}
<div className="mt-10 border-t border-[#2a2a2a]">

  {/* HEADER */}
  <div className="flex justify-between items-center py-6">
    <p className="text-base font-medium text-white">
      Rating & review
    </p>

    <div className="text-right">
      <div className="flex items-center gap-2 justify-end">
        <span className="text-xl font-semibold text-white">4.4</span>
        <span className="text-yellow-400 text-xl">★</span>
      </div>
      <p className="text-xs text-gray-400">
        1254 Rating & 234 reviews
      </p>
    </div>
  </div>

  {/* REVIEW ITEM */}
  <div className="border-t border-[#2a2a2a] py-5">
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 rounded bg-[#d9ff00] text-black text-xs font-semibold flex items-center justify-center">
        5★
      </div>

      <div>
        <p className="text-sm text-white font-medium">
          Fabulous product, realy loved it
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Abdul basith, Oct 26
        </p>
      </div>
    </div>
  </div>

  {/* REVIEW ITEM */}
  <div className="border-t border-[#2a2a2a] py-5">
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 rounded bg-[#d9ff00] text-black text-xs font-semibold flex items-center justify-center">
        5★
      </div>

      <div>
        <p className="text-sm text-white font-medium">
          Fabulous product, realy loved it
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Abdul basith, Oct 26
        </p>
      </div>
    </div>
  </div>

  {/* REVIEW ITEM WITH DESCRIPTION */}
  <div className="border-t border-[#2a2a2a] py-5">
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 rounded bg-[#d9ff00] text-black text-xs font-semibold flex items-center justify-center">
        5★
      </div>

      <div>
        <p className="text-sm text-white font-medium">
          Fabulous product, realy loved it
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Abdul basith, Oct 26
        </p>

        <p className="text-sm text-gray-400 mt-3 leading-relaxed">
          nice collections swa diamonds,
          <br />
          i realy loved it and thank you soo
          <br />
          much for your quick delivery
        </p>
      </div>
    </div>
  </div>

  {/* SEE ALL */}
  <div className="border-t border-[#2a2a2a] py-5 flex justify-between items-center">
    <p className="text-sm text-white font-medium">
      See all 243 Reviews
    </p>
    <span className="text-gray-500 text-xl">›</span>
  </div>

</div>


    </section>
  );
};

export default ProductDetailsPanel;
