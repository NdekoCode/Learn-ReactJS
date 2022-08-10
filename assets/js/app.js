class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.input = React.createRef();
  }
  handleClick(e) {
    console.log(e, this.input.current.value);
  }
  render() {
    console.log(this.input);
    return (
      <div className="container mt-5">
        <div className="form-group d-flex">
          <Field ref={this.input} />
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

const Field = React.forwardRef(function (props, ref) {
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control rounded-0 rounded-start"
        ref={ref}
      />
    </div>
  );
});
ReactDOM.render(<Home />, document.getElementById("app"));
