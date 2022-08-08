const scaleNames = {
  c: "Celcius",
  f: "Fahrenheit",
};
function celciusToFahrenheit(celcius) {
  return celcius * (9 / 5) + 32;
}
function fahrenheitToCelcius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}
function Home() {
  return (
    <div className="container mt-5">
      <Calculator />
    </div>
  );
}
function BoilingVerdict({ celcius }) {
  return (
    <div className="my-3">
      {celcius >= 100 ? (
        <div className="alert alert-success">L'eau bout</div>
      ) : (
        <div className="alert alert-info">L'eau ne bout pas</div>
      )}
    </div>
  );
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);

    /**
     * @temperature {integer} represente la valeur entrer dans le composant TemperatureInput
     */
    this.state = {
      temperature: 0,
      // Pour que notre calculator puisse savoir sur quelle échelle il est
      scale: "c",
    };
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }
  handleCelciusChange(value) {
    console.log(value);
    this.setState({
      scale: "c",
      temperature: value,
    });
  }

  handleFahrenheitChange(value) {
    this.setState({
      scale: "f",
      temperature: value,
    });
  }
  render() {
    const { temperature, scale } = this.state;
    // Si l"echel est en "Celcius" alors renvoyer mois la température normal, sinon convertis la temperature rentrer en farheinet en degrer celcius
    const celcius =
      scale === "c" ? temperature : fahrenheitToCelcius(temperature);
    // Si l"echel est en "fahrenheit" alors renvoyer mois la température normal EN fahrenheit, sinon convertis la temperature QUI est rentrer en celcius en farheinet en degrer celcius

    const fahrenheit =
      scale === "f" ? temperature : celciusToFahrenheit(celcius);

    /**
     * L'attribut onTemperatureChange permet de faire en sorte que le Calculator puisse detecter quand t'on a changer la temperature dans le composant TemperatureInput
     */

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celcius}
          onTemperatureChange={this.handleCelciusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celcius={temperature} />
      </div>
    );
  }
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: 30 };
    this.temperatureHandleChange = this.temperatureHandleChange.bind(this);
  }
  temperatureHandleChange({ target }) {
    µ;
    // La proprieter onTemperatureChange permet de faire remonter les informations de l'enfant aux parents, c'est un callback utiliser comme une proprieter sur le parent et ce qui est donné comme valeur à a la proprieter declencherant un nouveau rendus à la detection de ce dernier
    this.props.onTemperatureChange(target.value);
  }
  render() {
    const { temperature, scale } = this.props;
    const name = "scale" + scale;
    return (
      <div className="form-group">
        <label htmlFor={name}>Temperature (en {scaleNames[scale]})</label>
        <input
          id={name}
          type="number"
          value={temperature}
          name={name}
          className="form-control"
          onChange={this.temperatureHandleChange}
        />
      </div>
    );
  }
}
ReactDOM.render(<Home />, document.getElementById("app"));
