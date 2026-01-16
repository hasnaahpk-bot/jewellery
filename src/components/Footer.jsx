import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/images/logo2.svg";

const Footer = () => {
  return (
    <footer className="bg-[#4b560f] text-[#e6ebc6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        
        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-5
            gap-8
            text-center
            sm:text-left
          "
        >
          {/* LOGO */}
          <div className="flex justify-center sm:justify-start">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="AGD Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h2 className="text-lg font-semibold tracking-wide">AGD</h2>
                <p className="text-xs text-lime-200">GOLD & DIAMONDS</p>
              </div>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-lime-100/90">
              <li className="hover:text-white cursor-pointer">Products</li>
              <li className="hover:text-white cursor-pointer">About</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-lime-100/90">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-sm font-semibold mb-3">
              Link up with Friends!
            </h3>
            <ul className="space-y-2 text-sm text-lime-100/90">
              <li className="flex items-center justify-center sm:justify-start gap-2 hover:text-white cursor-pointer">
                <FaInstagram /> Instagram
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 hover:text-white cursor-pointer">
                <FaYoutube /> YouTube
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 hover:text-white cursor-pointer">
                <FaLinkedinIn /> LinkedIn
              </li>
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h3 className="text-sm font-semibold mb-3">
              Questions? Comments? Concerns?
            </h3>
            <button
              className="
                mt-2
                w-full
                sm:w-auto
                px-5
                py-2
                text-sm
                font-medium
                bg-[#eef1c8]
                text-[#4b560f]
                rounded-md
                hover:bg-black
                transition
              "
            >
              Help
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 sm:mt-10 text-center text-xs text-lime-200/80">
          © 2025 Gold E commerce. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
