import Googleplay from "../assets/images/googleplay.svg"
import Appstore from "../assets/images/appstore.svg"


const AppDownloadBanner = () => {
  return (
    <section className="w-full bg-[#0f0f0f] px-4 sm:px-6 lg:px-10 py-10">
      <div
        className="
          mx-auto
          max-w-7xl
          rounded-2xl
          border
          border-lime-400/70
          bg-gradient-to-br
          from-[#020d14]
          via-[#041822]
          to-[#020d14]
          px-6
          sm:px-10
          py-12
          text-center
        "
      >
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-lime-400">
          Download Our Mobile App
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed">
          Get the top E-commerce app on your phone! We’ve got you covered with a
          super user-friendly experience and tons of events to check out. Dive
          in and explore!
        </p>

        {/* Store buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <img
            src={Googleplay}
            alt="Get it on Google Play"
            className="h-11 cursor-pointer"
          />

          <img
            src={Appstore}
            alt="Download on the App Store"
            className="h-11 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default AppDownloadBanner;
