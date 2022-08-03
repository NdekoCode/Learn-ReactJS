class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Arick",
      member: ["Arick", "Abel"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae maiores cupiditate architecto itaque, sed vero asperiores. Fugiat aliquid atque doloribus laboriosam reprehenderit porro earum sequi, quasi animi omnis dolorum!",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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
      </div>
    );
  }
}
ReactDOM.render(<Home />, document.getElementById("app"));
