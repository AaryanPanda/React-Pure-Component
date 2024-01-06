import React, { Component } from "react";
import SimpleComponent from "./components/SimpleComponent";
import PureComponent from "./components/PureComponent";

class App extends Component {
  render() {
    return (
      <>
        <SimpleComponent />
        <PureComponent />
      </>
    );
  }
}

export default App;
