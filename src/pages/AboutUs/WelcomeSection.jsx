export function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="content-wrapper">
        <div className="image-column">
          <img
            loading="lazy"
            src="https://thumbs.dreamstime.com/b/smiling-colleagues-doctors-looking-camera-portrait-two-arms-crossed-56483805.jpg"
            className="welcome-image"
          />
        </div>
        <div className="text-column">
          <h3 className="subtitle">Welcome to Medicure Hospital</h3>
          <h1 className="title">
            Best Care possible
            <br />
            Health is welath
          </h1>

          <div className="features-grid">
            <div className="features-column">
              <FeatureItem text="A Passion for treating" />
              <FeatureItem text="Best Doctors" />
              <FeatureItem text="Affordable Medicine" />
            </div>
            <div className="features-column">
              <FeatureItem text="7-Star Care" />
              <FeatureItem text="Succesfully operating since 1997" />
              <FeatureItem text="A Legacy of reputation" />
            </div>
          </div>

          <p className="description">
          "Life presents many obstacles, but through unwavering determination, we can conquer them. Success is the result of persistent effort and the bravery to keep advancing. True growth emerges when we gain wisdom from our experiences and welcome new opportunities. True strength is forged by facing challenges with confidence and a positive spirit."
          </p>
          
        </div>
      </div>

      <style jsx>{`
        .welcome-section {
          margin-top: 22px;
          width: 100%;
          max-width: 988px;
        }
        .content-wrapper {
          gap: 20px;
          display: flex;
        }
        .image-column {
          width: 42%;
        }
        .welcome-image {
          aspect-ratio: 0.8;
          object-fit: contain;
          object-position: center;
          width: 100%;
        }
        .text-column {
          width: 58%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .subtitle {
          color: #159eec;
          font-family: Work Sans, sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 2.88px;
          text-transform: uppercase;
        }
        .title {
          color: #1f2b6c;
          font-family: Yeseva One, serif;
          font-size: 48px;
          font-weight: 400;
          margin-top: 8px;
        }
        .features-grid {
          margin-top: 24px;
          width: 100%;
          max-width: 478px;
          display: flex;
          gap: 20px;
        }
        .features-column {
          width: 50%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .description {
          color: #000;
          font-family: Work Sans, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
          margin-top: 32px;
        }
        .description + .description {
          margin-top: 16px;
        }
        @media (max-width: 991px) {
          .welcome-section {
            max-width: 100%;
          }
          .content-wrapper {
            flex-direction: column;
          }
          .image-column {
            width: 100%;
          }
          .text-column {
            width: 100%;
            margin-top: 16px;
          }
          .title {
            font-size: 40px;
          }
          .features-grid {
            flex-direction: column;
          }
          .features-column {
            width: 100%;
            margin-top: 38px;
          }
        }
      `}</style>
    </section>
  );
}

function FeatureItem({ text }) {
  return (
    <div className="feature-item">
      <div className="feature-dot" />
      <span className="feature-text">{text}</span>

      <style jsx>{`
        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .feature-dot {
          border-radius: 50px;
          background: #159eec;
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }
        .feature-text {
          color: #000;
          font-family: Work Sans, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
}
