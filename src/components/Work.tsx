import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "NeuroForge AI",
    category: "ML SaaS Dashboard",
    summary:
      "Full-stack machine learning platform for automated training, real-time inference, model analytics, authentication, billing, and deployment workflows.",
    tools: "Python, FastAPI, PostgreSQL, React, Scikit-Learn, XGBoost, Docker",
    image: `${import.meta.env.BASE_URL}images/project-neuroforge.svg`,
    link: "",
  },
  {
    title: "Humanizer",
    category: "AI Text SaaS",
    summary:
      "SaaS app that rewrites AI-generated text across multiple styles with usage limits, JWT authentication, subscriptions, and a production web interface.",
    tools: "Python, FastAPI, React, OpenAI API, PostgreSQL, Stripe",
    image: `${import.meta.env.BASE_URL}images/project-humanizer.svg`,
    link: "",
  },
  {
    title: "LLM Workflow Automation",
    category: "Agentic AI Pipeline",
    summary:
      "Stateful LangGraph pipeline that classifies support tickets, generates GPT-powered responses, and manages multi-turn context with structured memory.",
    tools: "Python, LangGraph, OpenAI API, FastAPI, JSON memory graphs",
    image: `${import.meta.env.BASE_URL}images/project-llm-workflow.svg`,
    link: "",
  },
  {
    title: "Weather Now",
    category: "Production Weather App",
    summary:
      "Deployed weather app with radar overlays, 7-day forecasts, AQI data, server-side API proxying, and CI/CD release flow.",
    tools: "TypeScript, Next.js, React, Open-Meteo, Leaflet, Vercel",
    image: `${import.meta.env.BASE_URL}images/project-weather-now.svg`,
    link: "https://weather-app-mahin.vercel.app",
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
                        <p className="carousel-summary">{project.summary}</p>
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
                      <WorkImage
                        image={project.image}
                        alt={`${project.title} project preview`}
                        link={project.link || undefined}
                      />
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
