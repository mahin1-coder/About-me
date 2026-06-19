import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              MAHIN
              <br />
              <span>AHSAN</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>CS + Data Science @ UMN</h3>
            <div className="landing-role-list">
              <span>AI/ML Engineer</span>
              <span>Full-Stack Developer</span>
              <span>Research Assistant</span>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
