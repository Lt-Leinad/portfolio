import { useState, useRef, useEffect } from "react";

export default function About() {
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
  const codeList = useRef(null);

  const handleHover = (e) => {
    !hover
      ? [...codeList.current.children][
          [...codeList.current.children].indexOf(e.currentTarget)
        ].lastChild.classList.add("display-none")
      : [...codeList.current.children][
          [...codeList.current.children].indexOf(e.currentTarget)
        ].lastChild.classList.remove("display-none");
  };

  const handleUnhover = (e) => {
    hover
      ? [...codeList.current.children][
          [...codeList.current.children].indexOf(e.currentTarget)
        ].lastChild.classList.add("display-none")
      : [...codeList.current.children][
          [...codeList.current.children].indexOf(e.currentTarget)
        ].lastChild.classList.remove("display-none");
  };

  return (
    <div className="about-container reveal-on-scroll" ref={ref}>
      <h1>About Me</h1>
      <p>
        Hi, I'm Daniel, an ambitious self-taught software developer and a
        Psychology graduate. Over the past year, I have been working
        independently, immersing myself in the world of web development while
        maintaining high-quality results throughout my university progress. I
        thrive under pressure and appreciate any feedback I receive from others.
        I am calm and collected, and I structure my days to facilitate growth
        and achievement.
      </p>
      <p>
        Through self-guided learning, I have acquired proficiency in HTML, CSS,
        and JavaScript, allowing me to create meaningful client projects while
        deepening my understanding of the business and developer relationship.
        Along the way, I have also learned frameworks and libraries such as
        React and familiarised myself with other programming languages such as
        Python, Java, and SQL, significantly expanding my skill set.
      </p>

      <h2>My Skills</h2>

      <ul ref={codeList}>
        <li onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
          <i className="fa-brands fa-html5"></i>
          <p className="display-none">HTML5</p>
        </li>
        <li onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
          <i className="fa-brands fa-css3-alt"></i>
          <p className="display-none">CSS3</p>
        </li>
        <li onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
          <i className="fa-brands fa-js"></i>
          <p className="display-none">JavaScript</p>
        </li>
        <li onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
          <i className="fa-brands fa-java"></i>
          <p className="display-none">Java</p>
        </li>
        <li onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
          <i className="sql">SQL</i>
          <p className="display-none">SQL</p>
        </li>
        <li onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
          <i className="fa-brands fa-python"></i>
          <p className="display-none">Python</p>
        </li>
        <li onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
          <i className="fa-brands fa-react"></i>
          <p className="display-none">React.js</p>
        </li>
        <li onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
          <i className="fa-brands fa-sass"></i>
          <p className="display-none">Sass</p>
        </li>
      </ul>
    </div>
  );
}
