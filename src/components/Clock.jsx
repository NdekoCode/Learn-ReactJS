import React, { Component } from "react";
export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    window.setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}
