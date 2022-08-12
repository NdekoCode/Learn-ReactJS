import logo from "./logo.svg";
import "./App.css";
import { Compter } from "./components/Compter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Compter />
      </header>
    </div>
  );
}

export default App;
