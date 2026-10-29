import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <h2>Logo</h2>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/acerca">Acerca</Link>
        <Link to="/proyecto">Proyecto</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;