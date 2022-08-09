class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Arick",
      member: ["Arick", "Abel"],
      check: false,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae maiores cupiditate architecto itaque, sed vero asperiores. Fugiat aliquid atque doloribus laboriosam reprehenderit porro earum sequi, quasi animi omnis dolorum!",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleBoolean = this.handleBoolean.bind(this);
  }
  handleText({ target }) {
    this.setState({
      description: target.value,
    });
  }
  handleChange({ target }) {
    this.setState({ nom: target.value });
  }
  handleSelect({ target }) {
    this.setState({
      member: Array.from(target.selectedOptions).map((opt) => opt.value),
    });
  }
  handleBoolean({ target }) {
    this.setState({
      // Pour les checkbox on utilise "checked" et aussi pour les type "radio"
      check: target.checked,
    });
    console.log(this.state.check, target.checked);
  }
  render() {
    return (
      <div>
        <div>
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={this.state.nom}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="25"
            rows="5"
            value={this.state.description}
            onChange={this.handleText}
          ></textarea>
        </div>
        <div>
          <label htmlFor="member">Membre</label>
          <select
            name="member"
            value={this.state.member}
            onChange={this.handleSelect}
            id="member"
            multiple
          >
            <option value="Cedric">Membre 1</option>
            <option value="Arick">Membre 2</option>
            <option value="Abel">Membre 3</option>
          </select>
        </div>
        <div>
          <label htmlFor="check">Check me {this.state.check}</label>
          <input
            type="checkbox"
            id="check"
            name="check"
            checked={this.state.check}
            onChange={this.handleBoolean}
          />
          {this.state.check ? (
            <div>Vous avez checker sur le checkbox</div>
          ) : null}
        </div>
      </div>
    );
  }
}
class Field extends React.Component {
  render() {
    const { type, name, value, onChange, children } = this.props;
    if (type === "checkbox" || type === "radio") {
      return (
        <div className="form-check">
          <input
            type={type}
            name={name}
            value={value}
            id={name}
            onChange={onChange}
            className="form-check-input"
          />
          <label htmlFor={name} className="form-check-label">
            {children}
          </label>
        </div>
      );
    }
    return (
      <div className="form-group">
        <label htmlFor={name}>{children}</label>
        <input
          type={type}
          name={name}
          value={value}
          id={name}
          onChange={onChange}
          className="form-control"
        />
      </div>
    );
  }
}
class Formular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      email: "",
      newsletter: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validForm = this.validForm.bind(this);
  }
  validForm(evt) {
    evt.preventDefault();
    const data = JSON.stringify(this.state);
    fetch(url, { method: "POST" });
    this.setState({ nom: "", prenom: "", email: "", newsletter: false });
  }
  handleChange({ target }) {
    const name = target.name;
    const type = target.type;
    const value = type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }
  render() {
    console.log("Render");
    return (
      <form action="" onSubmit={this.validForm} className="container mt-5">
        <div>
          <Field
            type="text"
            name="nom"
            value={this.state.nom}
            onChange={this.handleChange}
          >
            Nom
          </Field>
          <Field
            type="text"
            name="prenom"
            value={this.state.prenom}
            onChange={this.handleChange}
          >
            Prenom
          </Field>
          <Field
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          >
            Email
          </Field>
          <Field
            type="checkbox"
            name="newsletter"
            value={this.state.check}
            onChange={this.handleChange}
          >
            S'abonner à la newsletter
          </Field>
          <div>
            <button type="submit" className="btn btn-primary">
              Valider
            </button>
          </div>
          {JSON.stringify(this.state)}
        </div>
      </form>
    );
  }
}
ReactDOM.render(<Formular />, document.getElementById("app"));
