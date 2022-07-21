class ManualIncrement extends React.Component {
  static defaultProps = {
    start: 0,
    step: 1,
  };
  constructor(props) {
    super(props);
    this.state = { index: props.start };
    console.log(this.state, props);
  }

  render() {
    return (
      <button onClick={this.increment.bind(this)}>{this.state.index}</button>
    );
  }
  increment() {
    this.setState((state, props) => ({ index: state.index + props.step }));
  }
}
function Home() {
  return (
    <div>
      <ManualIncrement />
    </div>
  );
}
ReactDOM.render(<Home />, document.getElementById("app"));
