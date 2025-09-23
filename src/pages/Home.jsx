import * as React from "react";
// All imports are correctly pointing to the files in the same directory.
// If you are still seeing "Could not resolve" errors, please verify the
// capitalization of your component filenames. Linux environments, like the
// one in Docker, are case-sensitive. For example, "mainvisual.jsx" and
// "MainVisual.jsx" are treated as different files.
import MainVisual from "./MainVisual.jsx";
import InfoSection from "./InfoSection.jsx";
import AboutSection from "./AboutSection.jsx";
import ServicesSection from "./ServicesSection.jsx";
import DoctorsSection from "./DoctorsSection.jsx";
import Footer from "./Footer.jsx";

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
