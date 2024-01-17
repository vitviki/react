const HeroSection = () => {
  return (
    <section id="hero-section" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Varun</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Full-Stack</span>
            {""}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Numquam voluptatibus quam dolorum eligendi repudiandae?
          </p>
        </div>
        <button className="btn btn-primary">Get in touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Image" />
      </div>
    </section>
  );
};

export default HeroSection;
