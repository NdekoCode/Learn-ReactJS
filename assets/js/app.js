class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.refHandle = this.refHandle.bind(this);
    this.input = React.createRef();
  }
  handleClick(e) {
    console.log(e, this.input.current.value);
  }
  refHandle(ref) {
    console.log(ref);
  }
  render() {
    console.log(this.input.current);
    return (
      <div className="container mt-5">
        <div className="form-group d-flex">
          <input
            type="text"
            ref={this.input}
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
