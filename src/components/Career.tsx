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
                <h4>AI Researcher</h4>
                <h5>University of Minnesota CSE</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Conducting AI-driven research on machine learning algorithms,
              data analysis, experimental design, model evaluation, and
              technical documentation with faculty researchers and graduate
              peers.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Undergraduate Research Assistant</h4>
                <h5>Networking, Mobile & AI Research Lab</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developing material classification models in Python and ROS2
              using synchronized camera and LiDAR data for autonomous systems
              perception and cross-scene generalization.
            </p>
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
              Used Excel, Minitab, Lean/Six Sigma analysis, ECOs, BOMs, and PTC
              Windchill PLM to identify process bottlenecks and support
              manufacturing improvement initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
