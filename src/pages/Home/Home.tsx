import Footer from "../../components/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import About from "../sections/About/About";
import Hero from "../sections/Hero/Hero";
import ProjectsSection from "../sections/Projects/Projects";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ProjectsSection />
      <Footer />
    </>
  );
};

export default Home;
