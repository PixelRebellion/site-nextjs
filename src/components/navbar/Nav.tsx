'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../navbar/Nav.css"; // Import your CSS file here
import { linksList } from "@/utils/dataLists";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Stäng menyn om användaren klickar utanför den
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (menuOpen && !(e.target as HTMLElement)?.closest("nav")) {
      setMenuOpen(false);
      }
    };

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    // Lägg till event listeners
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    // Städa upp event listeners när komponenten unmountar
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 65) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Toggle menyn när hamburger-ikonen klickas
  const handleHamburgerClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={`${scrolling ? "navbar-scroll" : "mobile-navbar-scroll"}`}>
      <div className="logo w-8 md:w-96">
        <Link href="/">Pixel Rebellion</Link>
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {linksList.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className={item.title === 'Contact' ? "contact-cta" : ""}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hamburger" onClick={() => handleHamburgerClick()}>
        <span className={`bar h-[0.3rem] block w-full bg-white transition-all duration-300 ease-in-out ${
          menuOpen ? 'absolute delay-75 rotate-45' : '-translate-y-2'
        }`}></span>

        <span className={`bar block w-full bg-white transition-all duration-300 ease-in-out ${
          menuOpen ? 'opacity-0' : 'opacity-100'
        }`}></span>

        <span className={`bar block w-full bg-white transition-all duration-300 ease-in-out ${
          menuOpen ? 'absolute delay-75 -rotate-45' : 'translate-y-2'
        }`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
