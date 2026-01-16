import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";

const Shopping = () => {
  const budgets = [
    { title: "Over 250k", subtitle: "7200+ styles", img: img1 },
    { title: "100k - 250k", subtitle: "5800+ styles", img: img2 },
    { title: "50k - 100k", subtitle: "3400+ styles", img: img3 },
    { title: "Under 50k", subtitle: "1900+ styles", img: img4 },
  ];

  return (
    <section className="bg-[#0f0f0f] py-10 sm:py-14 ">
      {/* HEADER */}
      <div className="text-center mb-6 sm:mb-8 px-4 ">
        <h2 className="text-xl sm:text-2xl font-semibold text-yellow-400">
          Shop on Budget
        </h2>
        <p className="text-xs sm:text-sm text-gray-400">
          We have every style at your affordable budget
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 px-4 max-w-7xl mx-auto">
        {budgets.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-xl"
          >
            {/* IMAGE */}
            <div className="aspect-[3/4] w-full">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* TEXT */}
<div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center text-white whitespace-nowrap">
              <p className="text-sm sm:text-base font-semibold">
                {item.title}
              </p>
              <span className="text-xs sm:text-sm text-yellow-400">
                {item.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shopping;
