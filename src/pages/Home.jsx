import HeroSection from "../components/Hero/HeroSection";
import Sponsor from "../components/Sponsor/Sponsor";

const Home = () => {
  return (
    <div>
      <div data-section="home">
        <HeroSection />
      </div>

      <div data-section="sponsor">
        <Sponsor />
      </div>
    </div>
  );
};

export default Home;