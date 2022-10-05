import React, { useState, useCallback } from "react";
import Cars from "./Cars";
import styles from "../assets/css/test.module.css";
const Form = () => {
  const [state, setState] = useState({
    username: "",
    color: "",
    colors: ["red", "blue", "green", "black", "pink"],
  });
  const changeName = useCallback(({ target }) => {
    setState((data) => ({ ...data, username: target.value }));
  }, []);
  const handleChange = useCallback(({ target }) => {
    setState((data) => ({ ...data, color: target.value }));
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-center align-content-center">
        <Cars width={400} fill={state.color} />
      </div>

      <form className="mt-5 card border-0">
        <div>
          <label htmlFor="username" className={styles.green}>
            Nom d'utilisateur
          </label>
          <input
            value={state.username}
            type="text"
            placeholder="Nom d'utilisateur"
            className="form-control"
            onChange={changeName}
          />
        </div>
        <div>
          <label htmlFor="color" className="form-label">
            Selectionner votre couleur
          </label>
          <select
            onInput={handleChange}
            name="color"
            id="color"
            className="form-control"
          >
            <option value="" selected>
              Choisisez votre Couleur
            </option>
            {state.colors.map((option, index) => (
              <option key={index} value={option}>
                {option.toLocaleLowerCase()}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="username" className="form-label">
            Commentaire
          </label>
          <textarea
            type="text"
            placeholder="Nom d'utilisateur"
            className="form-control"
            onChange={changeName}
          >
            {state.username}
          </textarea>
        </div>
        {state.color}
      </form>
    </div>
  );
};

export default Form;
