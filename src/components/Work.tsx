import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "ML Model Deployment Dashboard",
    category: "AI / ML Systems",
    tools: "Python, Scikit-Learn, FastAPI, React, Power BI",
    image: `${import.meta.env.BASE_URL}images/placeholder.webp`,
    link: "",
  },
  {
    title: "LLM-Powered Workflow Automation",
    category: "AI Automation",
    tools: "Python, LangGraph, OpenAI API, FastAPI",
    image: `${import.meta.env.BASE_URL}images/placeholder.webp`,
    link: "",
  },
  {
    title: "Weather App",
    category: "Web Application",
    tools: "Next.js, TypeScript, React, Open-Meteo, Leaflet",
    image: `${import.meta.env.BASE_URL}images/placeholder.webp`,
    link: "https://weather-app-mahin.vercel.app",
  },
  {
    title: "Valentine's Interactive Website",
    category: "Creative UI",
    tools: "HTML, CSS, JavaScript",
    image: `${import.meta.env.BASE_URL}images/placeholder.webp`,
    link: "https://mahin1-coder.github.io/Valentines/",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-live-link"
                            data-cursor="disable"
                          >
                            View Live →
                          </a>
                        ) : (
                          <span className="project-no-link">In Development</span>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="disable"
                        >
                          <WorkImage image={project.image} alt={project.title} />
                        </a>
                      ) : (
                        <WorkImage image={project.image} alt={project.title} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
