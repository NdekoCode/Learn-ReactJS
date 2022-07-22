class ManualIncrement extends React.Component {
  static defaultProps = {
    start: 0,
    step: 1,
  };
  constructor(props) {
    super(props);
    this.state = { index: props.start, timer: null };
    this.toggle = this.toggle.bind(this);
    this.begin = this.begin.bind(this);
  }
  componentDidMount() {
    this.play();
  }
  componentWillUnMount() {
    // On ne doit pas appeler un setState dans cet evenement pour eviter d'avoir des problèmes internes avec React
    window.clearInterval(this.state.timer);
  }
  /**
   * @description Va incrementer l'index
   * @author NdekoCode
   * @memberof ManualIncrement
   */
  increment() {
    this.setState((state, props) => ({ index: state.index + props.step }));
  }
  play() {
    window.clearInterval(this.state.timer);
    // On est pas obliger de modifier "index" car il va fusionner l'objet retourner avec l'Etat courant
    this.setState({
      timer: window.setInterval(this.increment.bind(this), 1000),
    });
  }
  pause() {
    window.clearInterval(this.state.timer);
    this.setState({ timer: null });
  }
  toggle() {
    return this.state.timer ? this.pause() : this.play();
  }
  label() {
    return this.state.timer ? "Pause" : "Lecture";
  }

  begin() {
    this.pause();
    this.setState((state, props) => ({ index: props.start, timer: null }));
    this.play();
  }

  render() {
    return (
      <div>
        valeur: <strong>{this.state.index}</strong>
        <button onClick={this.toggle}>{this.label()}</button>
        <button onClick={this.begin}>Reinitialiser</button>
      </div>
    );
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
