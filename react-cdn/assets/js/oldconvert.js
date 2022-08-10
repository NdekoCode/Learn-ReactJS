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

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="container mt-5">
          <Calculator />
        </div>
      </div>
    );
  }
}

function BoilingVerdict({ celcius }) {
  return (
    <div>
      {celcius >= 100 ? (
        <div className="alert alert-success">L'eau bout</div>
      ) : (
        <div className="alert alert-info">L'eau ne bout pas</div>
      )}
    </div>
  );
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ target }) {
    const value = target.value;
    this.props.onTemperatureChange(value);
  }

  render() {
    const { scale } = this.props;
    const { temperature } = this.props;
    const name = "scale" + scale;
    return (
      <div className="form-group">
        <label className="form-label" htmlFor={name}>
          Température (en {scaleNames[scale]})
        </label>
        <input
          id={name}
          type="number"
          name={name}
          value={temperature}
          onChange={this.handleChange}
          className="form-control"
        />
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    /**
     * @temperature {integer} represente la valeur entrer dans le composant TemperatureInput
     */
    this.state = { temperature: 20, scale: "c" };
    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleTemperatureChange(temperature) {
    this.setState({
      temperature,
    });
  }
  handleCelciusChange(temperature) {
    this.setState({
      scale: "c",
      temperature,
    });
  }
  handleFahrenheitChange(temperature) {
    this.setState({
      scale: "f",
      temperature,
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
        <BoilingVerdict celcius={celcius} />
      </div>
    );
  }
}
ReactDOM.render(<Home />, document.getElementById("app"));
