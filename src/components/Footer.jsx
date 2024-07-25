// src/components/Footer.js
import React from "react";
import "../styles/custom.css"; // Assurez-vous d'importer le fichier CSS

const Footer = () => {
  return (
    <footer className="header-footer">
      <div className="container text-center">
        <span className="text-secondary-custom">
          &copy; 2024 Gestion des utilisateurs. Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
