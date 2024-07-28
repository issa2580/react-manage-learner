// src/components/UserDetails.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/custom.css";

const DetailsUser = ({ users }) => {
  const { id } = useParams();
  const user = users.find((u) => `${u.prenom}-${u.nom}` === id);

  if (!user) {
    return <div className="alert alert-danger">Utilisateur non trouvé</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h1 className="card-title">Détails de l'Apprenant</h1>
        <div className="card-body">
          <div className="text-center mb-4">
            {user.photo && (
              <img
                src={
                  // Thioro
                  typeof user.photo === "string"
                    ? user.photo
                    : user.photo instanceof File
                    ? URL.createObjectURL(user.photo)
                    : ""
                }
                alt={`${user.prenom} ${user.nom}`}
                className="rounded-circle user-photo-detail"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            )}
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Nom:</strong> {user.nom}
            </li>
            <li className="list-group-item">
              <strong>Prénom:</strong> {user.prenom}
            </li>
            <li className="list-group-item">
              <strong>Sexe:</strong> {user.sexe}
            </li>
            <li className="list-group-item">
              <strong>Pays d'origine:</strong> {user.pays}
            </li>
            <li className="list-group-item">
              <strong>Modules:</strong>
              <ul>
                {user.modules.map((module, index) => (
                  <li key={index}>{module}</li>
                ))}
              </ul>
            </li>
            <li className="list-group-item">
              <strong>Motivation:</strong> {user.motivation}
            </li>
          </ul>
        </div>
      </div>
      <Link to="/" className="btn btn-primary mt-4">
        Retour à la liste des apprenants
      </Link>
    </div>
  );
};

export default DetailsUser;
