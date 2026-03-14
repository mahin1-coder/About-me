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
                <h4>Learning & Projects</h4>
                <h5>Self-Taught Developer</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Started learning web development. Built multiple projects using
              HTML, CSS, JavaScript. Explored React and modern frontend
              frameworks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Development</h4>
                <h5>Personal Projects</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Expanded into full-stack development with Node.js and databases.
              Created several web applications and contributed to open source
              projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Building & Growing</h4>
                <h5>Current Focus</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Continuing to learn new technologies and build impactful projects.
              Open to opportunities and collaboration on interesting challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
