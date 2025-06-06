import "../hero/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-heading">
          <span>
            PIXEL
          </span>{" "}
          <span>
            REBELLION
          </span>
        </h1>
        <p className="hero-subheading">
          We're freelance agency for the digital age. We help you build your digital
          empire with pixel-perfect design and development.
        </p>
        <a href="#work" className="hero-cta">
          Start the Rebellion
        </a>
      </div>
    </section>
  );
};

export default Hero;
