import * as React from "react";
import InfoCard from "./InfoCard.jsx";

function InfoSection() {
  return (
    <>
      <section className="info-section">
        <InfoCard
          title="Appointment booking"
          line1="Great leaders don’t set out to be a leader. They set out to make a difference. It is never about the role always about the goal."
          line2="Choose slot now."
        />
        <InfoCard
          title="Emergency Services"
          line1="Next to creating a life, the finest thing a man can do is save one."
          line2="Turning challenges into opportunities with care and precision."
        />
        <InfoCard
          title="24/7 Support"
          line1="Available 24/7 to provide reliable care for our patients ensure your safety."
          line2="Step forward with confidence."
        />
      </section>
      <style jsx>{`
        .info-section {
          display: flex;
          gap: 20px;
          justify-content: space-around;
          margin-top: 64px;
        }
        @media (max-width: 991px) {
          .info-section {
            flex-direction: column;
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default InfoSection;
