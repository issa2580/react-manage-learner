import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/custom.css";

const AddUser = ({ onAdd }) => {
  const [user, setUser] = useState({
    prenom: "",
    nom: "",
    sexe: "masculin",
    pays: "",
    modules: [],
    motivation: "",
    photo: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setUser({ ...user, photo: file });
  };

  const handleModulesChange = (e) => {
    const { options } = e.target;
    const selectedModules = [];
    for (const option of options) {
      if (option.selected) {
        selectedModules.push(option.value);
      }
    }
    setUser({ ...user, modules: selectedModules });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User submitted:", user);
    onAdd(user);
    setUser({
      prenom: "",
      nom: "",
      sexe: "masculin",
      pays: "",
      modules: [],
      motivation: "",
      photo: null,
    });
    navigate("/");
  };

  return (
    <div className="container">
      <div className="card shadow-sm p-3">
        <h1 className="card-title mb-2">Ajouter un Apprenant</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-1">
            <label htmlFor="prenom">Prénom:</label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={user.prenom}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group mb-1">
            <label htmlFor="nom">Nom:</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={user.nom}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group mb-1">
            <label htmlFor="sexe">Sexe:</label>
            <select
              id="sexe"
              name="sexe"
              value={user.sexe}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="masculin">Masculin</option>
              <option value="feminin">Féminin</option>
            </select>
          </div>
          <div className="form-group mb-1">
            <label htmlFor="pays">Pays d'origine:</label>
            <input
              type="text"
              id="pays"
              name="pays"
              value={user.pays}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group mb-1">
            <label htmlFor="modules">Modules :</label>
            <select
              id="modules"
              name="modules"
              multiple
              value={user.modules}
              onChange={handleModulesChange}
              className="form-control"
              required
            >
              <option value="cloud">Cloud</option>
              <option value="securite">Sécurité</option>
              <option value="aws">AWS</option>
              <option value="dev-web">Dev-Web</option>
              <option value="base_de_donnees">Base de données</option>
              <option value="devops">DevOps</option>
              <option value="programmation">Programmation</option>
            </select>
          </div>
          <div className="form-group mb-1">
            <label htmlFor="motivation">Motivation:</label>
            <textarea
              id="motivation"
              name="motivation"
              value={user.motivation}
              onChange={handleChange}
              rows="4"
              className="form-control"
              required
            ></textarea>
          </div>
          <div className="form-group mb-1">
            <label htmlFor="photo">Photo:</label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handlePhotoChange}
              className="form-control"
              accept="image/*"
            />
          </div>
          <div className="form-group mb-1 text-center">
            <button type="submit" className="btn btn-primary w-50">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
