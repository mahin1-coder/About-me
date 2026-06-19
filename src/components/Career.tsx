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
              Contributing to AI research through machine learning experiments,
              dataset analysis, model evaluation, and technical documentation
              in collaboration with faculty researchers and graduate peers.
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
              Building material classification models in Python and ROS2 with
              synchronized camera and LiDAR data to improve perception and
              cross-scene generalization for autonomous systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Fellow</h4>
                <h5>Handshake</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Selected for a competitive AI/LLM fellowship focused on applying
              large language model techniques to practical career services,
              talent platform, and workflow optimization problems.
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
              Applied data analysis with Excel and Minitab to identify process
              bottlenecks, support Lean/Six Sigma initiatives, and manage ECO
              and BOM workflows in PTC Windchill PLM.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Service Desk Team Lead</h4>
                <h5>Normandale Community College</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Led campus IT support for 5,000+ users, resolved 70+ tickets
              weekly through TeamDynamix, supervised junior technicians, and
              maintained computer lab infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
