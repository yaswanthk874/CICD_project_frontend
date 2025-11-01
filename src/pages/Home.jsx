import * as React from "react";
// All imports now correctly point into the HOME subdirectory.
// Please ensure your local file and folder names match the
// capitalization exactly, as the Docker build environment is case-sensitive.
import MainVisual from "./home/MainVisual.jsx";
import InfoSection from "./home/InfoSection.jsx";
import AboutSection from "./home/AboutSection.jsx";
import ServicesSection from "./home/ServicesSection.jsx";
import DoctorsSection from "./home/DoctorsSection.jsx";
import Footer from "./home/Footer.jsx";

function Home() {
  return (
    <>
      <div className="home">
        {/* <Header /> */}
        {/* <Navbar /> */}
        <MainVisual />
        <InfoSection />
        <AboutSection />
        <ServicesSection />
    
        <DoctorsSection />
        {/* <NewsSection /> */}
        <Footer />
      </div>
      <style jsx>{`
        .home {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: var(--white,rgb(255, 250, 250));
          width: 100%;
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
}

export default Home;
