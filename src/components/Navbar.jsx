import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import Logotext from "../assets/images/logotext.svg";
import Search from "../assets/images/search.svg";
import Notify from "../assets/images/notify.svg";
import Profile from "../assets/images/profile.svg";
import Heart from "../assets/images/heart.svg";
import Cart from "../assets/images/cart.svg";
import { NavbarItems } from "../constants/NavbarItems";
import MobileSidebar from "./MobileSidebar";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart();


  return (
    <>
      <header className="bg-[#E7F66C] w-full">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          
          {/* LEFT: MENU + LOGO */}
          <div className="flex items-center gap-2 shrink-0">
            {/* MENU BUTTON (mobile only) */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-lg font-semibold"
              aria-label="Open menu"
            >
              ☰
            </button>

            {/* LOGO */}
            <img src={Logo} alt="logo" className="w-10 sm:w-14" />
            <div>
              <img
              onClick={() => navigate("/")}
                src={Logotext}
                alt="logo text"
                className="w-16 sm:w-24"
              />
              <p className="text-[10px] sm:text-xs text-[#546D7D]">
                Gold & Diamonds
              </p>
            </div>
          </div>

          
          {/* SEARCH */}
<div className="relative w-full md:max-w-md md:flex md:items-center md:ml-auto order-last md:order-none">
  <img
    src={Search}
    alt="search"
    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-70"
  />
  <input
    type="text"
    placeholder="Search here"
    className="w-full h-9 rounded-md border border-black pl-10 pr-3 text-sm"
  />
</div>


          {/* RIGHT ICONS */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={Notify} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
            <img src={Profile} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
            <img onClick={() => navigate("wishlist")} src={Heart} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
<button
  onClick={() => navigate("/cart")}
  className="relative"
>
  <img src={Cart} alt="cart" className="w-5 h-5" />

  {cart.length > 0 && (
    <span
      className="
        absolute -top-2 -right-2
        w-5 h-5
        rounded-full
        bg-red-500
        text-black
        text-xs
        font-semibold
        flex items-center justify-center
      "
    >
      {cart.length}
    </span>
  )}
</button>


          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 px-6 py-2 justify-between max-w-7xl mx-auto">
          {NavbarItems.map((item) => (
            <button
              key={item}
              className="text-sm font-medium hover:underline"
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      {/* MOBILE SIDEBAR */}
      <MobileSidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
