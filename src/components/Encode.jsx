import React, { useState, useMemo, useCallback } from "react";
import { Button } from "./Button";

function wait(t) {
  const start = Date.now();
  while (Date.now() - start < t) {}
}
function encodeNumber(number) {
  wait(1000);
  return Date.now();
}
export function Encode() {
  const [name, setName] = useState("John");
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };
  //   Dès que le number dans [number] change on reéxecute la fonction
  const encoded = useMemo(() => encodeNumber(number), [number]);
  const handleClick = useCallback(() => alert("Bonjour"), []);
  return (
    <div>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Nom
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="number" className="form-label">
          Nombre
        </label>
        <input
          type="number"
          name="number"
          id="number"
          value={number}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <Button onClick={handleClick} />
      <div>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="btn btn-success"
        >
          Incrementer {count}
        </button>
      </div>
      {encoded}
      <br />
      {number}
    </div>
  );
}
