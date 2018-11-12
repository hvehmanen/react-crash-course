import React, { Component } from "react";
import Counter from "./counter";
import Consumer from "../contexts/countersContext";
import CountersActions from "./countersActions";

class Counters extends Component {
  render() {
    console.log("counters render");
    return (
      <div>
        <Consumer>
          {context => (
            <React.Fragment>
              {context.counters.map(counter => (
                <Counter
                  key={counter.id}
                  onDelete={context.onDelete}
                  onIncrement={context.onIncrement}
                  counter={counter}
                />
              ))}
            </React.Fragment>
          )}
        </Consumer>
        <CountersActions />
      </div>
    );
  }
}

export default Counters;
