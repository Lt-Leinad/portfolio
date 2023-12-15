import { useState, useRef, useEffect } from "react";

export default function Projects() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-15%" }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting && !ref.current.classList.contains("already-scrolled")) {
      ref.current.classList.remove("reveal-on-scroll");
      ref.current.classList.add("already-scrolled");
    }
  }, [isIntersecting]);

  // HOVER FUNCTION

  const [hover] = useState(true);

  const handleHover = (e) => {
    [...e.currentTarget.children][0].className = `${
      hover ? "project-btn-container" : "display-none"
    }`;
  };

  const removeHover = (e) => {
    [...e.currentTarget.children][0].className = `${
      !hover ? "project-btn-container" : "display-none"
    }`;
  };

  // LINKS FUNCTIONS

  const linkFuncs = (e) => {
    const codeLinks = [
      "https://github.com/Lt-Leinad/GSW",
      "https://github.com/Lt-Leinad/kfm",
      "https://github.com/Lt-Leinad/portfolioRepo",
      "https://github.com/Lt-Leinad/Queenpin",
    ];
    const websiteLinks = [
      "https://gsw-events.netlify.app/",
      "https://kevinfeddymedia.co.uk",
      "https://danielfeddy.com/",
      "https://queenpin.online/",
    ];
    const modalIndex = [
      ...e.currentTarget.parentElement.parentElement.parentElement.children,
    ]
      .filter((x) => [...x.classList].includes("project-details-modal"))
      .indexOf(e.currentTarget.parentElement.parentElement);
    const overlayIndex = [
      ...e.currentTarget.parentElement.parentElement.parentElement.children,
    ].indexOf(e.currentTarget.parentElement.parentElement);

    const modalFunc = (e) => {
      e.currentTarget.innerHTML.includes("Website")
        ? window.open(websiteLinks[modalIndex])
        : window.open(codeLinks[modalIndex]);
    };

    const overlayFunc = (e) => {
      e.currentTarget.innerHTML.includes("Website")
        ? window.open(websiteLinks[overlayIndex])
        : window.open(codeLinks[overlayIndex]);
    };

    e.currentTarget.parentElement.classList.contains("project-btn-container")
      ? overlayFunc(e)
      : modalFunc(e);
  };

  // MODAL FUNCTION

  const modal = useRef();

  const handleModal = (e) => {
    let index = [
      ...e.currentTarget.parentElement.parentElement.parentElement.children,
    ].indexOf(e.currentTarget.parentElement.parentElement);
    let el = [...modal.current.parentElement.children].filter((x) =>
      [...x.classList].includes("project-details-modal")
    )[index];
    el.classList.remove("display-none");
  };

  const removeModal = (e) => {
    e.currentTarget.parentElement.classList.add("display-none");
  };

  return (
    <div className="projects-container reveal-on-scroll" ref={ref}>
      <h1>These are some of my projects</h1>
      <div className="projects-grid">
        <div
          className="project"
          onMouseEnter={handleHover}
          onMouseLeave={removeHover}
          style={{
            backgroundImage: `url(/photos/gsw-desktop.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "101% 101%",
            backgroundPosition: "center center",
          }}
        >
          <div className="display-none">
            <button className="project-btn" onPointerUp={handleModal}>
              View Details
            </button>
            <button className="project-btn" onPointerUp={linkFuncs}>
              View Code
            </button>
            <button className="project-btn" onPointerUp={linkFuncs}>
              Visit Website
            </button>
          </div>
        </div>

        <div
          className="project"
          onMouseEnter={handleHover}
          onMouseLeave={removeHover}
          style={{
            backgroundImage: `url(/photos/kfm-desktop.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "101% 101%",
          }}
        >
          <div className="display-none">
            <button className="project-btn" onPointerUp={handleModal}>
              View Details
            </button>
            <button className="project-btn" onPointerUp={linkFuncs}>
              View Code
            </button>
            <button className="project-btn" onPointerUp={linkFuncs}>
              Visit Website
            </button>
          </div>
        </div>

        <div
          className="project"
          onMouseEnter={handleHover}
          onMouseLeave={removeHover}
          style={{
            backgroundImage: `url(/photos/portfolio-desktop.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "170% 160%",
            backgroundPosition: "center center",
          }}
        >
          <div className="display-none">
            <button className="project-btn" onPointerUp={handleModal}>
              View Details
            </button>
            <button className="project-btn" onPointerUp={linkFuncs}>
              View Code
            </button>
            <button className="project-btn" onPointerUp={linkFuncs}>
              Visit Website
            </button>
          </div>
        </div>

        <div
          className="project"
          onMouseEnter={handleHover}
          onMouseLeave={removeHover}
          style={{
            backgroundImage: `url(/photos/queenpin-desktop.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "center center",
          }}
        >
          <div className="display-none">
            <button className="project-btn" onPointerUp={handleModal}>
              View Details
            </button>
            <button className="project-btn" onPointerUp={linkFuncs}>
              View Code
            </button>
            <button className="project-btn" onPointerUp={linkFuncs}>
              Visit Website
            </button>
          </div>
        </div>
      </div>

      <div className="gsw-modal project-details-modal display-none" ref={modal}>
        <h1>GSW Events</h1>
        <p>
          I began my web development journey with this landing page website that
          I built for a DJ and events business. I utilised HTML5, CSS3 and
          JavaScript to design and construct this party themed website from
          scratch. I made sure to implement all of the clients' preferences into
          my responsive design. The client was thrilled with the results.
        </p>
        <div className="modal-btns-container">
          <button className="modal-btn" onPointerUp={linkFuncs}>
            View Code
          </button>
          <button className="modal-btn" onPointerUp={linkFuncs}>
            Visit Website
          </button>
        </div>
        <button className="x-out-modal" onClick={removeModal}>
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>

      <div className="kfm-modal project-details-modal display-none" ref={modal}>
        <h1>Kevin Feddy Media</h1>
        <p>
          I designed and built this modern looking website for a PR company.
          Prioritising a professional aesthetic, I utilised HTML5, CSS3 and
          JavaScript to create a multi-page website with many features and
          superb responsiveness. I also performed an audit on the application to
          ensure the performance, SEO and accessiblity was the best.
        </p>
        <div className="modal-btns-container">
          <button className="modal-btn" onPointerUp={linkFuncs}>
            View Code
          </button>
          <button className="modal-btn" onPointerUp={linkFuncs}>
            Visit Website
          </button>
        </div>
        <button className="x-out-modal" onClick={removeModal}>
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>

      <div
        className="portfolio-modal project-details-modal display-none"
        ref={modal}
      >
        <h1>My Portfolio</h1>
        <p>
          {" "}
          My portfolio website was designed to showcase my projects and skills.
          With a focus on a modern design, I utilised React.js and SASS to reach
          the result I hoped for. I implemented the Intersectional Observer API
          whilst ensuring that the code is well-tested and clean.
        </p>
        <div className="modal-btns-container">
          <button className="modal-btn" onPointerUp={linkFuncs}>
            View Code
          </button>
          <button className="modal-btn" onPointerUp={linkFuncs}>
            Visit Website
          </button>
        </div>
        <button className="x-out-modal" onClick={removeModal}>
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>

      <div
        className="queenpin-modal project-details-modal display-none"
        ref={modal}
      >
        <h1>Queen Pin</h1>
        <p>
          I built this beautifully designed website with HTML5, CSS3, and
          vanilla JavaScript. I intentionally did not use a framework or a
          library since I prioritised a lightweight model for this website. I
          followed the design shown to me by the client, and improved upon it
          where my experience was valuable. I utilised template modules for
          consistent elements of the site, and coded functions to retrieved data
          from the JSON files I constructed for the blog page.
        </p>
        <div className="modal-btns-container">
          <button className="modal-btn" onPointerUp={linkFuncs}>
            View Code
          </button>
          <button className="modal-btn" onPointerUp={linkFuncs}>
            Visit Website
          </button>
        </div>
        <button className="x-out-modal" onClick={removeModal}>
          <i className="fa-regular fa-circle-xmark"></i>
        </button>
      </div>
    </div>
  );
}
