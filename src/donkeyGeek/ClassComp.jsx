import React, { Component } from "react";

export default class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "données de test",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Props", props, state);
    console.log(
      "%c je suis en mode montage",
      " background: yellow;font-size:15px"
    );
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    return true;
  }
  componentDidMount() {
    console.log("je suis monté");
    this.setState({
      test: this.props.data,
    });
  }

  componentDidUpdate() {
    console.log(
      "%c je suis modifier",
      "color:white;background: green;font-size:15px"
    );
  }
  componentWillUnmount() {
    console.log("je suis demonté");
  }
  render() {
    return <div>Composant monté HTML</div>;
  }
}
