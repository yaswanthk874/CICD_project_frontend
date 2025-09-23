import * as React from "react";

function AboutSection() {
  return (
    <>
      <section className="about-section">
        <h2 className="section-title">Welcome to Medicure</h2>
        <h3 className="section-subtitle">A Great Place to Receive Care</h3>
        <p className="section-paragraph">
        Medicare Hospital is dedicated to providing high-quality, patient-focused healthcare with advanced medical expertise. Established in 2001, the hospital combines compassionate care with cutting-edge technology to serve the community effectively. The hospital’s mission is to enhance health and well-being by delivering top-tier medical services at affordable costs. With a strong emphasis on continuous improvement, education, and collaboration, Medicare Hospital strives to exceed patient and family expectations while upholding values of compassion, excellence, and integrity.
        </p>
        <div className="learn-more">
          <a href="#" className="learn-more-link">
            Learn More
          </a>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/2fc11632f7ba2ed6c136a89dcdf8a1599bf336972e5c0ed2dd3e4c2cf774e6bb?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&"
            alt=""
            className="learn-more-icon"
          />
        </div>
        <img
          src="https://png.pngtree.com/background/20230520/original/pngtree-group-of-doctors-pose-together-to-show-their-profession-picture-image_2673163.jpg"
          alt="Hospital Interior"
          className="about-image"
        />
      </section>
      <style jsx>{`
        .about-section {
          background-color: rgba(21, 158, 236, 0.01);
          padding: 64px 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        @media (max-width: 991px) {
          .about-section {
            padding: 0 20px;
          }
        }
        .section-title {
          color: var(--Secondary, #0f1010ff);
          letter-spacing: 2.88px;
          text-transform: uppercase;
          font: 700 18px Work Sans, sans-serif;
          margin-top: 64px;
        }
        @media (max-width: 991px) {
          .section-title {
            margin-top: 40px;
          }
        }
        .section-subtitle {
          color: var(--Primary, #111216ff);
          font: 400 32px Yeseva One, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 8px;
        }
        .section-paragraph {
          color: var(--Black, #212124);
          margin-top: 15px;
          width: 658px;
          font: 400 16px/22px Work Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .section-paragraph {
            width: 100%;
          }
        }
        .learn-more {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--Secondary, #111313ff);
          margin-top: 32px;
          font: 400 16px/1.4 Work Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .learn-more-link {
          color: inherit;
          text-decoration: none;
        }
        .learn-more-icon {
          aspect-ratio: 1.1;
          width: 11px;
        }
        .about-image {
          aspect-ratio: 2.1;
          width: 100%;
          margin-top: 61px;
        }
        @media (max-width: 991px) {
          .about-image {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default AboutSection;
