import AboutOverview from "./AboutOverview";
import BannerCarousel from "./BannerCarousel";
import Services from "./Service/Services";

const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <AboutOverview />
      <Services />
    </div>
  );
};

export default Home;
