import * as React from "react";
// All imports now correctly point into the HOME subdirectory.
// Please ensure your local file and folder names match the
// capitalization exactly, as the Docker build environment is case-sensitive.
import MainVisual from "./HOME/MainVisual.jsx";
import InfoSection from "./HOME/InfoSection.jsx";
import AboutSection from "./HOME/AboutSection.jsx";
import ServicesSection from "./HOME/ServicesSection.jsx";
import DoctorsSection from "./HOME/DoctorsSection.jsx";
import Footer from "./HOME/Footer.jsx";

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
