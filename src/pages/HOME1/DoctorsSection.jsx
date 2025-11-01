import * as React from "react";
import DoctorCard from "./DoctorCard.jsx";

function DoctorsSection() {
  const doctors = [
    // {
    //   imageSrc: "src/assets/DoctorJohny.png", // Added Doctor Johny's image
    //   doctorName: "Dr. Johnny",
    //   specialty: "Cardiology",
    // },
    // {
    //   imageSrc:
    //     "https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/a2babe5b78d3fcc814ecc3ed30c9cac800dfa2e6fd79dd1be8d530d26a4da2cf?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&",
    //   doctorName: "Dr. Michael Williams",
    //   specialty: "Psychology",
    // },
    {
      imageSrc:
        "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX12657449.jpg",
      doctorName: "Dr. Ramya Devi",
      specialty: "Neurology",
    },
    {
      imageSrc:
        "https://img.freepik.com/premium-photo/portrait-male-medical-doctor-around-40-years-old_1000823-15807.jpg",
      doctorName: "Dr. Gopal kumar",
      specialty: "Cardiology",
    },
    {
      imageSrc:
        "https://cdn.pixabay.com/photo/2023/12/21/06/23/doctor-8461303_640.jpg",
      doctorName: "Dr. Raghu Ram",
      specialty: "Psychology",
    },
  ];

  return (
    <>
      <section className="doctors-section">
        <h2 className="section-title">Our Doctors</h2>
        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>
      </section>
      <style jsx>{`
  .doctors-section {
    margin-top: 60px;
    text-align: center;
    padding: 40px 20px;
    background: var(--Primary, #0d0d0eff);
    color: var(--white, #fcfefe);
    display: flex;
    flex-direction: column;
    align-items: center; /* Center the content */
    padding-top: 20px;
  }

  @media (max-width: 991px) {
    .doctors-section {
      padding: 0 20px;
      margin-top: 40px;
    }
  }

  .section-title {
    color: var(--Secondary, #070808ff);
    letter-spacing: 2.88px;
    text-transform: uppercase;
    font: 700 18px Work Sans, sans-serif;
  }

  .doctors-grid {
    display: grid;
    justify-content: center; /* Center the grid items */
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 64px;
    width: 100%; /* Ensures it takes up available space */
    max-width: 900px; /* Adjust as needed */
  }

  @media (max-width: 991px) {
    .doctors-grid {
      grid-template-columns: 1fr;
      margin-top: 40px;
    }
  }
`}</style>

    </>
  );
}

export default DoctorsSection;
