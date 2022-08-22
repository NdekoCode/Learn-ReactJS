import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
const FormContextContain = createContext({});
export function Home() {
  const handleSubmit = useCallback((value) => {
    console.log(value);
  }, []);
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
  // On créer un Etat qui va contenir la valeur par defaut passer en props
  const [data, setData] = useState(defaultValue);
  // Une fonction qui va permettre de modifier le contenus du CONTEXT
  const change = useCallback(function (name, value) {
    // On ajoute l'ancien contenus  et à ce contenus on assigne l'indice name à sa valeur ET {...d,change} est similaire à  Object.assign({},d,{[name]:value})
    setData((d) => ({ ...d, [name]: value }));
  }, []);
  // Le nouveau CONTEXT va contenir nos données et aussi la fonction qui va modifier ces données, et ce context va aussi modifier le context en haut ET {...data,change} est similaire à  Object.assign({},data,{change:change})
  const value = useMemo(() => ({ ...data, change }), [data, change]);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // On utilise la fonction que l'on nous a passer en props
      onSubmit(value);
    },
    [onSubmit, value]
  ); // Cette fonction va changer quand onSubmit va changer et quand VALUE va changer
  // On initialise un Provider qui va permettre de transferer à ses composant enfant le contenus du context
  return (
    <FormContextContain.Provider value={value}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContextContain.Provider>
  );
}

function FormField({ children, name }) {
  // On utilise notre context
  const data = useContext(FormContextContain);
  const handleChange = useCallback(
    (evt) => {
      data.change(evt.target.name, evt.target.value);
    },
    [data]
  );

  return (
    <div className="form-group">
      {children && (
        <label className="form-label" htmlFor={name}>
          {children}
        </label>
      )}
      <input
        type="text"
        id={name}
        name={name}
        value={data[name] || ""}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
}
function PrimaryButton({ children }) {
  return (
    <div className="form-button my-1">
      <button className="btn btn-primary">{children}</button>
    </div>
  );
}
