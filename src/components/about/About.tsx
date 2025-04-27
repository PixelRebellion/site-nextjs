'use client';
import React, { useEffect } from "react";
import "../about/About.css";

const About = () => {
  useEffect(() => {
    const aboutSection = document.querySelector(".about-section");
    const heading = document.querySelector(".about-heading");
    const text = document.querySelector(".about-text");

    // Lägg till scroll-event
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      // Kolla om sektionen är synlig
      // if (scrollPosition > aboutSection.offsetTop + 100) {
      //   heading.classList.add("animate-heading");
      //   text.classList.add("animate-text");
      // }
    };

    // Lägg till scroll-eventlyssnare
    window.addEventListener("scroll", handleScroll);

    // Rensa upp eventlyssnare
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="about-section">
      <div className="about-inner">
        <h2 className="about-heading">About Pixel Rebellion</h2>
        <p className="about-text">
          Welcome to Pixel Rebellion, where we push the boundaries of design and
          development. We believe in creating unique digital experiences that
          break free from the ordinary.
        </p>
        <a href="#contact" className="about-cta">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default About;
