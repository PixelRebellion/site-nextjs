'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../navbar/Nav.css"; // Import your CSS file here


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
    if (window.scrollY > 125) {
      console.log('scrolling', window.scrollY);
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Toggle menyn när hamburger-ikonen klickas
  const handleHamburgerClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`${scrolling ? "navbar-scroll" : "mobile-navbar-scroll"}`}>
      <div className="logo">
        <Link href="/">Pixel Rebellion</Link>
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={item.name === 'Contact' ? "contact-cta" : ""}>
              {item.name}
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
