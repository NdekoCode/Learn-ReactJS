import React, { Component } from "react";
import "../assets/css/Clock.css";
export class Clock extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    this.timer = window.setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    window.clearInterval(this.timer);
  }
  render() {
    return (
      <div className="clock">Il est {this.state.date.toLocaleTimeString()}</div>
    );
  }
}
