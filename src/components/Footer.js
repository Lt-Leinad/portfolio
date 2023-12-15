import { useRef } from "react";
import Pdf from "../components/CV.pdf";

export default function Footer() {
  const link = useRef(null);

  const scrollTo = (e) => {
    const sections = [
      ".home-container",
      ".about-container",
      ".projects-container",
    ];
    const index = [...link.current.children].indexOf(e.currentTarget);
    window.scrollTo({
      top:
        window.pageYOffset -
        -1 *
          document.querySelector(`${sections[index]}`).getBoundingClientRect()
            .top,
      behaviour: "smooth",
    });
  };
  return (
    <div className="footer">
      <ul className="footer-nav" ref={link}>
        <li onClick={scrollTo}>HOME</li>
        <li onClick={scrollTo}>ABOUT</li>
        <li onClick={scrollTo}>PROJECTS</li>
        <a href={Pdf} target="_blank" rel="noreferrer">
          RESUME
        </a>
      </ul>
      <ul className="footer-socials">
        <a
          href="https://www.linkedin.com/in/daniel-feddy-490612262/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Lt-Leinad" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="mailto:daniel.feddy0123@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </ul>
    </div>
  );
}
