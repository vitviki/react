import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navActive, setnavActive] = useState(false);

  const toggleNav = () => {
    setnavActive(!navActive);
  };

  const closeMenu = () => {
    setnavActive(false);
  };

  const handleResize = () => {
    if (window.innerWidth <= 500) {
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive} ? "active" : ""`}>
      <Link to="hero-section" className="logo">
        <img src="./img/logo.svg" alt="Logoipsum" />
      </Link>
      {/* <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hambuger__line"></span>
        <span className="nav__hambuger__line"></span>
        <span className="nav__hambuger__line"></span>
      </a> */}
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offest={-70}
              duration={500}
              to="hero-section"
              onClick={closeMenu}
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offest={-70}
              duration={500}
              to="about-section"
              onClick={closeMenu}
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offest={-70}
              duration={500}
              to="skills-section"
              onClick={closeMenu}
              className="navbar--content"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offest={-70}
              duration={500}
              to="portfolio-section"
              onClick={closeMenu}
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offest={-70}
              duration={500}
              to="testimonial-section"
              onClick={closeMenu}
              className="navbar--content"
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
      <Link
        activeClass="navbar--active--content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="contact"
        className="btn btn-outline-primary"
        onClick={closeMenu}
      >
        Contact Me
      </Link>
    </nav>
  );
};

export default Navbar;
