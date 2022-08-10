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
        <div className="form-group d-flex align-items-center">
          <FieldComponentWithRef ref={this.input} label="Demo" />
          <button
            className="btn btn-secondary rounded-0 h-100 rounded-end"
            onClick={this.handleClick}
          >
            Valider
          </button>
        </div>
      </div>
    );
  }
}

const FieldComponentWithRef = React.forwardRef((props, ref) => {
  // {...props} permet de dire que toute proprieter passer à props sera pris comme un enfant de props ainis si on met un <FieldComponent label="Demo"/> il sera directement rajouter dans les props sous forme this.props = {label:"Demo"}
  return <Field forwardRef={ref} {...props} />;
});
class Field extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="form-group">
        {/* <label htmlFor="">{this.props.label}</label> */}
        <input
          type="text"
          className="form-control rounded-0 rounded-start"
          ref={this.props.forwardRef}
        />
      </div>
    );
  }
}
ReactDOM.render(<Home />, document.getElementById("app"));
