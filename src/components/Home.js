import { useRef } from "react";
import Pdf from "../components/CV.pdf";

export default function Home() {
  const link = useRef(null);

  const sections = [
    ".about-container",
    ".projects-container",
    ".contact-container",
  ];

  const scrollTo = (e) => {
    if (
      document
        .querySelector(
          `${
            sections[
              [...e.currentTarget.parentElement.children].indexOf(
                e.currentTarget
              )
            ]
          }`
        )
        .classList.contains("reveal-on-scroll")
    ) {
      window.scrollTo({
        top:
          document
            .querySelector(
              `${
                sections[
                  [...e.currentTarget.parentElement.children].indexOf(
                    e.currentTarget
                  )
                ]
              }`
            )
            .getBoundingClientRect().y - 160,
        behaviour: "smooth",
      });
    } else {
      window.scrollTo({
        top: document
          .querySelector(
            `${
              sections[
                [...e.currentTarget.parentElement.children].indexOf(
                  e.currentTarget
                )
              ]
            }`
          )
          .getBoundingClientRect().y,
        behaviour: "smooth",
      });
    }
  };

  return (
    <div className="home-container">
      <div>
        <h1>DANIEL FEDDY</h1>
        <hr />
        <h2>SOFTWARE ENGINEER</h2>
      </div>
      <ul className="nav" ref={link}>
        <li onClick={scrollTo}>ABOUT</li>
        <li onClick={scrollTo}>PROJECTS</li>
        <li onClick={scrollTo}>CONTACT</li>
        <a href={Pdf} target="_blank" rel="noreferrer">
          RESUME
        </a>
      </ul>
      <ul className="socials">
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
