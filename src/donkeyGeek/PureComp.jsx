import { PureComponent } from "react";

export default class PureComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hero: "Arick",
      isHero: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Si ce n'est pas un hero alors donne lui la valeur de batman, du coup à chaque fois que le va cliquer il va lui donner la valeur de Batman, car l'Etat hero sera toujours batman
    this.setState((state) => (state.hero = !state.isHero ? "Batman" : "arick"));
  }
  render() {
    console.log("Je suis rerendus");
    return (
      <div>
        Pure component Hero: {this.state.hero}{" "}
        <button onClick={this.handleClick}>click-me</button>
      </div>
    );
  }
}
