import Ring from "../assets/images/bangle.png";

const Banner = () => {
  return (
    <div className="bg-[#0f0f0f] w-full px-4 sm:px-6 py-6">
      <div
        className="
        w-full
          mx-auto
          max-w-7xl
          rounded-2xl
          overflow-hidden
          bg-gradient-to-r
          from-[#6b7014]
          via-[#2f3308]
          to-black
          h-auto
          lg:h-[280px]
        "
      >
        {/* CONTENT */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            px-6
            sm:px-10
            lg:px-20
            py-6
            lg:py-0
            h-full
          "
        >
          {/* IMAGE */}
          <div className="w-full lg:w-[600px] flex justify-center mb-6 lg:mb-0">
            <img
              src={Ring}
              alt="Gold Rings"
              className="w-[260px] sm:w-[380px] lg:w-[600px] object-contain"
            />
          </div>

          {/* TEXT */}
          <div className="w-full lg:max-w-[380px] text-center lg:text-left lg:ml-auto text-white">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-serif mb-2">
              The Best Gold Ever
            </h1>

            <p className="text-xs sm:text-sm font-thin text-white/80 leading-relaxed mb-5 ">
              People thinking about the future why gold make high
              value here is the answer for all about
            </p>

           
<button
  className="
    w-full
    lg:w-auto
    px-16
    py-3
    mt-14
    mx-auto
    block
    rounded-md
    border
    border-[#b8c03f]
    text-[#d6df63]
    text-sm
    hover:bg-[#b8c03f]
    hover:text-black
    transition
  "
>
  Explore
</button>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
