import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <a href="/" className="brand-logo">
            Poke'Times
          </a>
          <ul className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
