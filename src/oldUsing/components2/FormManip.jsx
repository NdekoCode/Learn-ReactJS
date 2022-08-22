import { useCallback, useMemo } from "react";
import { createContext, useContext, useState } from "react";

const formContextContain = createContext({});
export function FormManip() {
  const handleSubmit = (value) => {
    console.log(value);
  };
  return (
    <div className="container my-5">
      <FormContext
        defaultValue={{ lastname: "Doe", firstname: "John" }}
        onSubmit={handleSubmit}
      >
        <FormField name="firstname">Prénom</FormField>
        <FormField name="lastname">Nom</FormField>
        <PrimaryButton>Envoyer</PrimaryButton>
      </FormContext>
    </div>
  );
}
function FormContext({ defaultValue, onSubmit, children }) {
  const [data, setData] = useState(defaultValue);
  const change = useCallback((name, value) => {
    setData((d) => ({ ...d, [name]: value }));
  }, []);
  const value = useMemo(() => ({ ...data, change }), [data, change]);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(value);
  };
  return (
    <formContextContain.Provider value={value}>
      <form onSubmit={handleSubmit}>{children}</form>
      {JSON.stringify(value)}
    </formContextContain.Provider>
  );
}
function FormField({ name, children }) {
  const data = useContext(formContextContain);
  const handleChange = (evt) => {
    data.change(evt.target.name, evt.target.value);
  };
  return (
    <div className="form-group">
      <label htmlFor={name}>{children}</label>
      <input
        type="text"
        id={name}
        value={data[name] || ""}
        name={name}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
}
function PrimaryButton({ children }) {
  return (
    <div>
      <button className="btn btn-primary">{children}</button>
    </div>
  );
}
