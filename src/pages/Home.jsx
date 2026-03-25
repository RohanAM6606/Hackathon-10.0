import HeroSection from "../components/Hero/HeroSection";
import Sponsor from "../components/Sponsor/Sponsor";
import Navbar from "../components/Navbar/Navbar";
import EventDetails from "../components/EventDetails/EventDetails";

const Home = () => {
  return (
    <div>
      <div data-section="home">
        <HeroSection />
      </div>
      <div data-section="eventdetails">
        <EventDetails />
      </div>

      
      <div data-section="domain">
        <Domain />
      </div>

      <div data-section="event">
        <EventDetails />
      </div>

      <div data-section="sponsor">
        <Sponsor />
      </div>
    </div>
  );
};

export default Home;