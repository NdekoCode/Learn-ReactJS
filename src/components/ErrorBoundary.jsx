import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorInfos: "",
    };
  }
  static getDerivedStateFromError(error) {
    return {
      errorInfos: error,
      error: true,
    };
  }
  // componentDidCatch(error, errorInfos) {
  //   console.log(errorInfos, error);
  // }
  render() {
    if (this.state.error) {
      return <div className="alert alert-danger">{this.props.fallback}</div>;
    }
    return this.props.children;
  }
}
