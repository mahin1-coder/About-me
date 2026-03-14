import { gsap } from "gsap";

export function initialFX() {
  const tl = gsap.timeline();

  tl.fromTo(
    ".hero-heading-1",
    { autoAlpha: 0, y: 50 },
    { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" },
    0.3
  )
    .fromTo(
      ".hero-heading-2",
      { autoAlpha: 0, y: 50 },
      { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" },
      0.5
    )
    .fromTo(
      ".hero-para",
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
      0.7
    )
    .fromTo(
      ".lets-talk",
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.6 },
      0.9
    );
}

export default initialFX;
