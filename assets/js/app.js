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
  // Pour definir les valeurs par defaut des props d'un composant
  static defaultProps = {
    start: 0,
    step: 1,
  };
  constructor(props) {
    super(props);
    console.log(props.step);
    this.timer = null;
    this.state = { index: props.start };
  }
  componentDidMount() {
    this.timer = window.setInterval(this.increment.bind(this), 1000);
  }
  componentWillUnmount() {
    window.clearInterval(this.timer);
  }
  increment() {
    // On utile cette methode car notre changement d'etat depend de l'Etat precedent ou d'une proprieter pour ne pas avoir de problème lors d'un groupement d'Etat fait par React avec plusieurs setState qui sont lancer au meme moment, cette methode nous permet d'avoir des composant qui ont des etat individuel, ie on peut avoir plusieurs <Increment/> qui demarre differement
    this.setState((state, props) => ({
      index: state.index + props.step,
    }));
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
      <Increment start={10} step={10} />
      <Increment start={110} />
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
