import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let smoother: undefined;

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".header ul a");

    const onClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const section = target.getAttribute("data-href");
      if (!section) return;
      const el = document.querySelector(section);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    links.forEach((elem) => {
      elem.addEventListener("click", onClick);
    });

    return () => {
      links.forEach((elem) => {
        elem.removeEventListener("click", onClick);
      });
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          MA
        </a>
        <a
          href="mailto:Mahin3.ahsan@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          Mahin3.ahsan@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
