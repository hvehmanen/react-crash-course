import React, { Component } from "react";
import Consumer from "../contexts/countersContext";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">
          Navbar{" "}
          <Consumer>
            {context => (
              <span className="badge badge-pill badge-secondary">
                {context.totalCounters}
              </span>
            )}
          </Consumer>
        </span>
      </nav>
    );
  }
}

export default NavBar;
