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
    links: [
      {
        label: "View Code",
        href: "https://github.com/mahin1-coder/ML-model--dashboard",
      },
    ],
  },
  {
    title: "Humanizer",
    category: "AI Text SaaS",
    summary:
      "SaaS app that rewrites AI-generated text across multiple styles with usage limits, JWT authentication, subscriptions, and a production web interface.",
    tools: "Python, FastAPI, React, OpenAI API, PostgreSQL, Stripe",
    image: `${import.meta.env.BASE_URL}images/project-humanizer.svg`,
    links: [
      {
        label: "View Code",
        href: "https://github.com/mahin1-coder/Humanizer",
      },
    ],
  },
  {
    title: "LLM Workflow Automation",
    category: "Agentic AI Pipeline",
    summary:
      "Stateful LangGraph pipeline that classifies support tickets, generates GPT-powered responses, and manages multi-turn context with structured memory.",
    tools: "Python, LangGraph, OpenAI API, FastAPI, JSON memory graphs",
    image: `${import.meta.env.BASE_URL}images/project-llm-workflow.svg`,
    links: [
      {
        label: "View Code",
        href: "https://github.com/mahin1-coder/Ai-job-bot",
      },
    ],
  },
  {
    title: "Weather Now",
    category: "Production Weather App",
    summary:
      "Deployed weather app with radar overlays, 7-day forecasts, AQI data, server-side API proxying, and CI/CD release flow.",
    tools: "TypeScript, Next.js, React, Open-Meteo, Leaflet, Vercel",
    image: `${import.meta.env.BASE_URL}images/project-weather-now.svg`,
    links: [
      {
        label: "View Live",
        href: "https://weather-app-mahin.vercel.app",
      },
      {
        label: "View Code",
        href: "https://github.com/mahin1-coder/Weather-App",
      },
    ],
  },
  {
    title: "ApplyPilot",
    category: "Job Application Automation",
    summary:
      "TypeScript application for organizing and automating job-search workflows with a cleaner application tracking experience.",
    tools: "TypeScript, React, workflow automation, career tools",
    image: `${import.meta.env.BASE_URL}images/project-applypilot.svg`,
    links: [
      {
        label: "View Code",
        href: "https://github.com/mahin1-coder/applypilot",
      },
    ],
  },
  {
    title: "CAV Camera",
    category: "Autonomous Systems Research",
    summary:
      "Computer vision research project connected to camera-based perception workflows for connected and autonomous vehicle systems.",
    tools: "Python, computer vision, camera data, research tooling",
    image: `${import.meta.env.BASE_URL}images/project-cav-camera.svg`,
    links: [
      {
        label: "View Code",
        href: "https://github.com/mahin1-coder/CAV-camera",
      },
    ],
  },
  {
    title: "Path Finder",
    category: "Algorithms & Visualization",
    summary:
      "Python project for path-finding logic and algorithmic problem solving, built to practice graph traversal and route planning concepts.",
    tools: "Python, graph algorithms, path search",
    image: `${import.meta.env.BASE_URL}images/project-path-finder.svg`,
    links: [
      {
        label: "View Code",
        href: "https://github.com/mahin1-coder/path-finder",
      },
    ],
  },
  {
    title: "Text to World",
    category: "Creative 3D / Simulation",
    summary:
      "C# project exploring text-driven world creation concepts and interactive environment generation.",
    tools: "C#, interactive systems, simulation",
    image: `${import.meta.env.BASE_URL}images/project-text-to-world.svg`,
    links: [
      {
        label: "View Code",
        href: "https://github.com/mahin1-coder/text-to-world-",
      },
    ],
  },
  {
    title: "Valentines",
    category: "Interactive Web Experience",
    summary:
      "Creative browser experience built with HTML, CSS, and JavaScript, focused on playful interactions and polished front-end presentation.",
    tools: "HTML, CSS, JavaScript, GitHub Pages",
    image: `${import.meta.env.BASE_URL}images/project-valentines.svg`,
    links: [
      {
        label: "View Live",
        href: "https://mahin1-coder.github.io/Valentines/",
      },
      {
        label: "View Code",
        href: "https://github.com/mahin1-coder/Valentines",
      },
    ],
  },
  {
    title: "Portfolio",
    category: "Personal Developer Site",
    summary:
      "Animated React and Three.js portfolio built to present projects, research, resume, and professional contact links for recruiters.",
    tools: "React, TypeScript, Vite, GSAP, Three.js, GitHub Pages",
    image: `${import.meta.env.BASE_URL}images/project-portfolio.svg`,
    links: [
      {
        label: "View Live",
        href: "https://mahin1-coder.github.io/About-me/",
      },
      {
        label: "View Code",
        href: "https://github.com/mahin1-coder/About-me",
      },
    ],
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
                        <h3>{String(index + 1).padStart(2, "0")}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <p className="carousel-summary">{project.summary}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="project-links">
                          {project.links.map((link) => (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-live-link"
                              data-cursor="disable"
                              key={link.href}
                            >
                              {link.label} →
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={`${project.title} project preview`}
                        link={project.links[0]?.href}
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
                aria-label={`Go to project ${String(index + 1).padStart(2, "0")}`}
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
