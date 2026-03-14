import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:Mahin3.ahsan@gmail.com" data-cursor="disable">
                Mahin3.ahsan@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>CS @ University of Minnesota – Twin Cities</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/mahin1-coder"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <h4>Location</h4>
            <p>Minneapolis, MN</p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Mahin Ahsan</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
