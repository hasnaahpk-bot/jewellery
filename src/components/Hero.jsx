import Heroimg from "../assets/images/Header.png";
import PlaneIcon from "../assets/images/plane.svg";
import MoneybackIcon from "../assets/images/moneyback.svg";
import SupportIcon from "../assets/images/support.svg";
import PaymentIcon from "../assets/images/payment.svg";

const Hero = () => {
  const features = [
  {
    label: "Free shipping",
    sub: "On order over ₹2000",
    icon: PlaneIcon,
  },
  {
    label: "Moneyback",
    sub: "Moneyback guarantee",
    icon: MoneybackIcon,
  },
  {
    label: "24/7 Support",
    sub: "Online consultations",
    icon: SupportIcon,
  },
  {
    label: "Secure payment",
    sub: "Safe shopping guarantee",
    icon: PaymentIcon,
  },
];


  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Heroimg})` }}
    >
    <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 pt-24 max-w-6xl w-full mx-auto sm:pt-28 lg:pt-32 text-white">
        <h1 className="text-2xl sm:text-4xl max-w-xl  lg:text-4xl font-semibold bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent">
          The World First Jewellery 
          Commerce Platform <br/>
          The Future Talent
        </h1>

        <p className="mt-4 max-w-sm text-xs sm:text-sm text-gray-200">
          Discover the future of jewelry shopping with our innovative
          e-commerce platform, showcasing exceptional talent and unique designs.
        </p>
      </div>



<div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-md ">
        <div className="flex justify-center sm:justify-between gap-4 rounded-xl mx-auto px-4 sm:px-6 py-4 max-w-5xl">
          {features.map((f) => (
  <div
    key={f.label}
    className="flex flex-col items-center text-center text-white"
  >
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#010F17]">
      <img
        src={f.icon}
        alt={f.label}
        className="w-5 h-5 object-contain"
      />
    </div>

    <p className="mt-2 text-sm font-medium">{f.label}</p>
    <span className="text-xs text-gray-300">{f.sub}</span>
  </div>
))}

        </div>
      </div>
    </div>
  );
};

export default Hero;
