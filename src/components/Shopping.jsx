import img1 from "../assets/images/img1.png"
import img2 from "../assets/images/img2.png"
import img3 from "../assets/images/img3.png"
import img4 from "../assets/images/img4.png"


const Shopping = () => {
const budgets = [
  {
    title: "Over 250k",
    subtitle: "7200+ styles",
    img: img1,
  },
  {
    title: "100k - 250k",
    subtitle: "5800+ styles",
    img: img2,
  },
  {
    title: "50k - 100k",
    subtitle: "3400+ styles",
    img: img3,
  },
  {
    title: "Under 50k",
    subtitle: "1900+ styles",
    img: img4,
  },
];

  return (
    <div className="bg-[#0f0f0f] py-12">

  <div className="text-center mb-8">
    <h2 className="text-xl sm:text-2xl font-semibold text-yellow-400">
      Shop on Budget
    </h2>
    <p className="text-sm text-gray-400">
      We have every style at your affordable budget
    </p>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
    {budgets.map((item) => (
      <div
        key={item.title}
        className="relative rounded-lg overflow-hidden"
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-[260px] object-cover"
        />

        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-sm font-semibold">{item.title}</p>
          <span className="text-xs text-yellow-400">
            {item.subtitle}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Shopping
