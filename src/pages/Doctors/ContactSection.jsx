const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-subtitle">Get in touch</h2>
      <h1 className="contact-title">Contact</h1>
      <div className="contact-grid">
        <div className="contact-cards">
          <article className="contact-card emergency">
            <h3 className="card-title">Emergency</h3>
            <p className="card-text">0800-555-0123 / 0800-555-0456</p>
            
          </article>
          <article className="contact-card location">
            <h3 className="card-title">Location</h3>
            <p className="card-text"> Vaddeswaram, Andhra Pradesh, </p>
            
          </article>
          <article className="contact-card email">
            <h3 className="card-title">Email</h3>
            <p className="card-text">contact@medicureexcellence.com</p>
           
          </article>
          <article className="contact-card hours">
            <h3 className="card-title">Working Hours</h3>
            <p className="card-text">24/7 Available</p>
          </article>
        </div>
      </div>
      <style jsx>{`
       * .contact-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .contact-section .contact-subtitle {
          color: #101213ff;
          text-align: center;
          font-family: Work Sans, sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 2.88px;
          text-transform: uppercase;
          margin: 80px 0 0;
        }
        .contact-section .contact-title {
          color: #202129ff;
          text-align: center;
          font-family: Yeseva One, serif;
          font-size: 32px;
          font-weight: 400;
          margin: 8px 0 0;
        }
         .contact-section .contact-grid {
          margin-top: 64px;
          width: 100%;
          max-width: 992px;
        }
         .contact-section .contact-cards {
          gap: 20px;
          display: flex;
        }
         .contact-section .contact-card {
          border-radius: 5px;
          padding: 105px 30px 50px;
          display: flex;
          flex-direction: column;
          align-items: start;
          font-family: Work Sans, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
          width: 25%;
        }
        .contact-section  .card-title {
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          margin: 0;
        }
        .contact-section  .card-text {
          margin: 8px 0 0;
        }
        .contact-section  .card-text + .card-text {
          margin-top: 5px;
        }
        .contact-section  .emergency {
          background: #292a2dff;
          color: #1f2b6c;
        }
        .contact-section  .location {
          background: #070708ff;
          color: #bfd2f8;
        }
        .contact-section  .email {
          background: #121314ff;
          color: #1f2b6c;
        }
        .contact-section  .hours {
          background: #050606ff;
          color: #1f2b6c;
        }
        @media (max-width: 991px) {
          .contact-grid {
            max-width: 100%;
            margin-top: 40px;
          }
          .contact-cards {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
          .contact-card {
            width: 100%;
            margin-top: 20px;
            padding: 100px 20px 50px;
          }
          .contact-subtitle {
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
