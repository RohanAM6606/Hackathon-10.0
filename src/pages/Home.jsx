import HeroSection from "../components/Hero/HeroSection";
import Sponsor from "../components/Sponsor/Sponsor";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

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