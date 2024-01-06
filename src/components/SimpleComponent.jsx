import React, { Component } from "react";
import "./component.css"

class SimpleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      toggleStatus: true,
    };
  }

  handleToggle = () => {
    this.setState({ ...this.state, toggleStatus: !this.state.toggleStatus });
  };

  handleOnClick = () => {
    if (this.state.toggleStatus) {
      this.setState({
        count: this.state.count + 1,
      });
    } else {
      this.setState({
        count: this.state.count,
      });
    }
  };

  render() {
    console.log("This is Simple Component");

    return (
      <div id="container">
        <h1>Simple Component</h1>
        <p id="count">{this.state.count}</p>
        <div id="button-holder">
          <button id="toggle" onClick={this.handleToggle}>Set Toggle</button>
          <button id="counter" onClick={this.handleOnClick}>Counter</button>
        </div>
      </div>
    );
  }
}

export default SimpleComponent;