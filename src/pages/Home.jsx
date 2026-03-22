import HeroSection from "../components/Hero/HeroSection";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div data-section="home">
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;