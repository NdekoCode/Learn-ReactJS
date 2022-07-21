/** les Composants Reacts */
// On va créer un titre qui va dire bonjour suivis du nom de la personne et on va utiliser un h1 pour cela
const namesClient = ["Jean", "Cedric", "Benjamin", "Reactif"];

function WelcomeFun({ names, children }) {
  console.log(names);
  return (
    <div>
      <ul className="list">
        {names.map((item, k) => (
          <li key={k}>Bonjour {item}</li>
        ))}
      </ul>
      <p> {children}</p>
    </div>
  );
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.names.map((item, k) => (
            <li key={k}>Bonjour {item}</li>
          ))}
        </ul>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

class Increment extends React.Component {
  constructor(props) {
    super(props);
    this.index = 0;
    this.state = { index: this.index };
  }
  componentDidMount() {
    window.setInterval(this.increment.bind(this), 1000);
  }
  increment() {
    this.setState({ index: this.index++ });
  }
  render() {
    return <button>{this.state.index}</button>;
  }
}

function Home() {
  return (
    <div>
      <Welcome names={namesClient}>
        Bonjour les gars j'espere que vous allez bien
      </Welcome>
      <Clock />
      <Increment />
    </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = { date: new Date() };
  }
  componentDidMount() {
    // function nameFunct: this represente l'Objet window
    // ()=>{} : this represente l'objet sur lequel il s'execute
    // this.funcName.bind(this) permet de faire en sorte que l'objet courante "this" represente  l'objet sur lequel s'execute funcName et non l'objet window
    this.timer = window.setInterval(this.tick.bind(this), 1000);
  }
  componentWillUnmount() {
    window.clearInterval(this.timer);
  }
  /**
   * @description Une methode qui va changer l'Etat
   * @author NdekoCode
   * @memberof Clock
   */
  tick() {
    // Pour changer l'etat on utilise la methode setState et on lui passe un objet qui represente le nouvel etat
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        Il est {this.state.date.toLocaleDateString()}{" "}
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("app"));
