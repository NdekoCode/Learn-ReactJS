import React from "react";
import { ThemedButton, ThemeContext } from "./Home";
export function Context() {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <div style={value}>
          <Toolbar />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

function SearcForm() {
  return (
    <div className="form-group my-1 d-flex">
      <input
        type="text"
        className="form-control rounded-0 rounded-start w-75"
      />
      <ThemedButton>Rechercher</ThemedButton>
    </div>
  );
}
function Toolbar({ theme }) {
  return (
    <div>
      <SearcForm />
      <div>
        <ul className="list-unstyled list-group">
          <li className="list-item">Tache 1</li>
          <li className="list-item">Tache 2</li>
          <li className="list-item">Tache 3</li>
        </ul>
        <ThemedButton className="">M'inscrire</ThemedButton>
      </div>
    </div>
  );
}
