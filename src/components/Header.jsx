// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/custom.css"; // Assurez-vous d'importer le fichier CSS

const Header = () => {
  return (
    <header className="header-footer">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link className="navbar-brand text-secondary-custom" to="/">
          Gestion des Apprenants
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/">
                Liste des Apprenants
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/add">
                Ajouter un Apprenant
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
