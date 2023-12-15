import { useState, useRef, useEffect } from "react";

export default function Contact() {
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

  return (
    <div className="contact-container reveal-on-scroll" ref={ref}>
      <div className="form-title">
        <h1>Let's work together...</h1>
        <p>Get in touch here</p>
      </div>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        className="form"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact" />

        <p className="contact-s1">
          <label>
            First Name * <input type="text" name="firstName" required />
          </label>
          <label>
            Last Name * <input type="text" name="lastName" required />
          </label>
        </p>

        <p className="contact-s2">
          <label>
            Company <input type="text" name="company" required />
          </label>
          <label>
            Phone Number <input type="tel" name="phoneNumber" required />
          </label>
        </p>

        <p>
          <label>
            Email * <input id="email-box" type="email" name="email" required />
          </label>
        </p>

        <p>
          <label>
            Message *<textarea id="msg-box" name="message" required></textarea>
          </label>
        </p>

        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}
