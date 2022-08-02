class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Jean",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nostrum cumque fugit sunt repellat, perferendis voluptas, hic quisquam facilis commodi, consequuntur accusantium impedit deserunt quidem magni. Minima vitae dicta aliquam!",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }
  handleChange(e) {
    this.setState({ nom: e.target.value });
  }
  handleChangeText(e) {
    this.setState({ text: e.target.value });
  }
  render() {
    return (
      <div>
        <div>
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            name="nom"
            id="nom"
            value={this.state.nom}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="text"></label>
          <textarea
            name="text"
            id="text"
            cols="30"
            value={this.state.text}
            onChange={this.handleChangeText}
            rows="10"
          ></textarea>
        </div>
        Valeur: {this.state.nom}
      </div>
    );
  }
}
ReactDOM.render(<Home />, document.getElementById("app"));
