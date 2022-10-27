import MyComponent from "./donkeyGeek/MyComponent";
import { createPortal } from "react-dom";
import { createRef, Component } from "react";
export default class AppDonkey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
      value: "",
    };
    this.input = createRef();
    this.handleModal = this.handleModal.bind(this);
    this.update = this.update.bind(this);
    console.log(this.input);
  }
  update(evt) {
    this.input.current.value = evt.target.value;
  }
  handleModal(evt) {
    this.setState({ view: !this.state.view });
    evt.stopPropagation();
  }
  render() {
    return (
      <div className="container">
        <h1>Valeur</h1>
        <div>
          <input
            ref={this.input}
            type="text"
            onChange={this.update}
            placeholder="Entrer une valeur"
          />
        </div>
        <button onClick={this.handleModal}>View Modal</button>
        {this.state.view &&
          createPortal(
            <div className="modal-container" onClick={this.handleModal}>
              <button className="btn-close" onClick={this.handleModal}>
                Fermer
              </button>

              <MyComponent />
            </div>,
            document.querySelector("body")
          )}
      </div>
    );
  }
}
