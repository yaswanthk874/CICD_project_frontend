import React from "react";
import { DoctorCard } from "./AboutUs/DoctorCard";
import { ContactInfo } from "./AboutUs/ContactInfo";
import { WelcomeSection } from "./AboutUs/WelcomeSection";
import { TestimonialSection } from "./AboutUs/TestimonialSection";
import "./AboutPage.css"; // external CSS file

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">About Our Hospital</h1>
          <p className="hero-subtitle">
            Committed to delivering reliable healthcare with empathy and advanced solutions."


          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <WelcomeSection />


      {/* Doctors Section */}
      <section className="doctors-section">
        <h3 className="section-subtitle">Meet Our Experts</h3>
        <h2 className="section-title">Our Doctors</h2>
        <div className="doctors-grid">
          <DoctorCard
            image="https://img.freepik.com/premium-photo/portrait-male-medical-doctor-around-40-years-old_1000823-15807.jpg "
            name="Dr. Gopal kumar"
            specialty="Cardiologist"
          />
          <DoctorCard
            image="https://cdn.pixabay.com/photo/2023/12/21/06/23/doctor-8461303_640.jpg"
            name="Dr. Raghu Ram"
            specialty="Neurologist"
          />
          <DoctorCard
            image="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX12657449.jpg"
            name="Dr. Ramya Devi"
            specialty="Pediatrician"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <ContactInfo />
      </section>
    </main>
  );
}
