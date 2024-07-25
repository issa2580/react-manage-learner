// src/components/UserList.js
import React from "react";

const ListUser = ({ users, onDelete }) => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Liste des Apprenants</h1>
      <table className="table table-striped table-bordered text-center">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Sexe</th>
            <th>Pays</th>
            <th>Modules</th>
            <th>Détail/Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="align-middle">
                {user.photo && (
                  <img
                    src={URL.createObjectURL(user.photo)}
                    alt={`${user.prenom} ${user.nom}`}
                    width="70"
                    height="70"
                    className="rounded-circle"
                  />
                )}
              </td>
              <td className="align-middle">{user.prenom}</td>
              <td className="align-middle">{user.nom}</td>
              <td className="align-middle">{user.sexe}</td>
              <td className="align-middle">{user.pays}</td>
              <td className="align-middle">{user.modules}</td>
              <td className="align-middle">
                <a
                  href={`/details/${user.prenom}-${user.nom}`}
                  className="btn btn-info btn-sm me-2"
                >
                  Détails
                </a>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(index)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;
