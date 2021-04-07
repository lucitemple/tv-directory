import React, { Component } from "react";
import "./App.css";
import Series from "../../containers/Series";
import Intro from "../Intro/";
import "whatwg-fetch";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV Series List</h1>
        </header>
        <Intro message="Here you can find all of your most loved series" />
        <Series />
      </div>
    );
  }
}

export default App;
