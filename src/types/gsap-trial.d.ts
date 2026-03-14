declare module "gsap-trial/ScrollSmoother" {
  import { GSAPPlugin } from "gsap";

  export const ScrollSmoother: GSAPPlugin & {
    create: (...args: any[]) => any;
    get: (...args: any[]) => any;
  };

  export default ScrollSmoother;
}

declare module "gsap-trial/SplitText" {
  import { GSAPPlugin } from "gsap";

  export const SplitText: GSAPPlugin & {
    new (...args: any[]): any;
  };

  export default SplitText;
}
