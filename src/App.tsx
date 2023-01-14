import React from "react";
import "./App.module.scss";
import DisplayName from "./components/DisplayName/DisplayName";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Training</h1>
        <DisplayName name="vishnu" />
      </div>
    );
  }
}

export default App;
