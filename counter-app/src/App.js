import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import { CountersProvider } from "./contexts/countersContext";
import "./App.css";

class App extends Component {
  componentDidMount() {
    //console.log("App - mounted");
    //Ajax call to get new data
  }

  render() {
    return (
      <React.Fragment>
        <CountersProvider>
          <NavBar />
          <main className="container">
            <Counters />
          </main>
        </CountersProvider>
      </React.Fragment>
    );
  }
}

export default App;
