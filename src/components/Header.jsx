import Logo from "../assets/images/logo.svg";
import Logotext from "../assets/images/logotext.svg";
import Search from "../assets/images/search.svg";
import Notify from "../assets/images/notify.svg";
import Profile from "../assets/images/profile.svg";
import Heart from "../assets/images/heart.svg";
import Cart from "../assets/images/cart.svg";

const header = () => {

    const items=["Offers","Earrings","Devotional","Bangle","Bracelet","Platinum","Solitaire","Pendant","Rings","Nosepin","Couple Band","Necklace","Navaratna"]

  return (
    <div className="bg-[#E7F66C] w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="" className="w-14" />
          <div>
            <img src={Logotext} alt="" className="w-24" />
            <p className="text-xs text-[#546D7D]">Gold & Diamonds</p>
          </div>
        </div>

        <div className="hidden md:flex relative items-center w-full max-w-md">
          <img
            src={Search}
            alt="search"
            className="absolute left-3  w-4 h-4 opacity-70 "
          />

          <input
            type="text"
            placeholder="Search here"
            className="w-full h-9 rounded-md border border-black pl-10 pr-3 text-sm placeholder:text-[#546D7D] "
          />
        </div>

        <div className="flex items-center gap-4">
          <img src={Notify} alt="" className="w-5 h-5 cursor-pointer" />
          <img src={Profile} alt="" className="w-5 h-5 cursor-pointer" />
          <img src={Heart} alt="" className="w-5 h-5 cursor-pointer" />
          <img src={Cart} alt="" className="w-5 h-5 cursor-pointer" />
        </div>
      </div>


<div className="flex gap-4 justify-between overflow-x-auto px-3 no-scrollbar">
  {items.map((item) => (
    <p key={item} className="hover:underline text-sm">
      {item}
    </p>
  ))}
</div>



    </div>
  );
};

export default header;
