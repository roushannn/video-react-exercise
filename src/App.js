import React, { Component } from "react";
import "./App.css";
import MoviesComponent from "./MoviesComponent"

class App extends Component {
  render() {
    return (
      <div className="container">
        <MoviesComponent />
      </div>
    );
  }
}

export default App;
