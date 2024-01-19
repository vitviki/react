import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Testimonials />
      <ContactMe />
    </>
  );
};

export default Home;
