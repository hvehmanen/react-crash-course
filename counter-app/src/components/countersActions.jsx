import React, { Component } from "react";
import Consumer from "../contexts/countersContext";

class CountersActions extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {context => (
            <React.Fragment>
              <button
                onClick={context.onReset}
                className="btn btn-primary btn-sm m-2"
              >
                Reset
              </button>
              <button
                onClick={context.onAdd}
                className="btn btn-success btn-sm"
              >
                Add counter
              </button>
            </React.Fragment>
          )}
        </Consumer>
      </div>
    );
  }
}

export default CountersActions;
