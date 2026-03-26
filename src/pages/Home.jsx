import FaqSection from "../components/Faq/FaqSection"
import HeroSection from "../components/Hero/HeroSection";
import Sponsor from "../components/Sponsor/Sponsor";
import Navbar from "../components/Navbar/Navbar";
import EventDetails from "../components/EventDetails/EventDetails";
import Domain from "../components/Domain/Domain";
import Timeline from "../components/TimeLine/EventTimeline";
const Home = () => {
  return (
    <div>
      <div data-section="home">
        <HeroSection />
      </div>

      <div data-section="domain">
        <Domain />
      </div>
      <div data-section="eventdetails">
        <EventDetails />
      </div>
      <div data-section="timeline">
        <Timeline />
      </div>

      <div data-section="sponsor">
        <Sponsor />
      </div>
      <div data-section="faq">
        <FaqSection />
      </div>

    </div>
  );
};

export default Home;
