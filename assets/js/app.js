class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.refHandle = this.refHandle.bind(this);
    this.input = null;
  }
  handleClick(e) {
    console.log(e, this.input.value);
  }
  refHandle(ref) {
    console.log(ref);
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="form-group d-flex">
          <input
            type="text"
            value={undefined}
            ref={(ref) => (this.input = ref)}
            className="form-control rounded-0 rounded-start"
          />
          <button
            className="btn btn-secondary rounded-0 rounded-end"
            onClick={this.handleClick}
          >
            Valider
          </button>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Home />, document.getElementById("app"));
