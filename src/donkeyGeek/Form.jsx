import React, { useState, useCallback } from "react";
import Cars from "./Cars";
import styled from "styled-components";
const Div = styled.div`
  padding: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.034);
  border-radius: 4px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  input,
  select {
    padding: 5px 5px;
    outline: none;
  }
  textare {
    padding: 5px;
  }
`;
const Title = styled.label`
  color: green;
  padding: 15px;
  span {
    color: red;
  }
`;
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
    <Div>
      <div className="d-flex justify-content-center align-content-center">
        <Cars width={400} fill={state.color} />
      </div>

      <form className="mt-5 card border-0">
        <div>
          <Title htmlFor="username">
            Nom <span>d'utilisateur</span>
          </Title>

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
    </Div>
  );
};

export default Form;
