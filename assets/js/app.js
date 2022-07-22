class ManualIncrement extends React.Component {
  static defaultProps = {
    start: 0,
    step: 1,
  };
  constructor(props) {
    super(props);
    this.state = { index: props.start, timer: null };
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

  render() {
    return (
      <div>
        valeur: <strong>{this.state.index}</strong>
        {this.state.timer ? (
          <button onClick={this.pause.bind(this)}>Pause</button>
        ) : (
          <button onClick={this.play.bind(this)}>Lecture</button>
        )}
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
