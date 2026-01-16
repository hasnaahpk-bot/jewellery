import AppDownloadBanner from "../components/AppDownloadBanner";
import Newarrivals from "../components/Newarrivals";
import RecentSearched from "../components/RecentSearched";
import Banner from "./Banner";
import Hero from "./Hero";
import Shopping from "./Shopping";
import TopDemanded from "./TopDemand";

const Home = () => {
  return (
    <>
      <Hero />
      <Shopping />
      <Newarrivals />
      <Banner />
      <TopDemanded />
      <RecentSearched />
      <AppDownloadBanner/>
    </>
  );
};

export default Home;
