import { render } from "@testing-library/react";
import { PureComponent } from "react";

export default class PureComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Pure component</div>;
  }
}
