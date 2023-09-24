import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <p className="nav__logo">RAAN</p>

      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Raan Logo"
      />
    </div>
  );
}

export default Navbar;
