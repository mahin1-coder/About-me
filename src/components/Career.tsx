import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Manufacturing Engineer Intern</h4>
                <h5>Abbott Laboratories · Plymouth, MN</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Applied Lean principles, conducted root cause analyses, and
              collaborated with production and quality teams to improve
              operational efficiency in a GMP-regulated environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Service Desk Assistant (Team Lead)</h4>
                <h5>Normandale Community College</h5>
              </div>
              <h3>2023–2025</h3>
            </div>
            <p>
              Led campus IT support operations, resolved 70+ technical tickets
              weekly. Maintained campus labs & infrastructure and improved
              escalation processes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CS @ University of Minnesota</h4>
                <h5>Twin Cities · CSE</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building production-ready ML deployments, LLM-powered automation
              workflows, and cloud-native services with AWS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
