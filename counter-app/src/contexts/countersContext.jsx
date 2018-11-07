import React, { Component } from "react";

const { Provider, Consumer } = React.createContext();
class CountersProvider extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 4, value: 1 }
    ]
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleAdd = () => {
    let counters = [...this.state.counters];
    const id = counters[counters.length - 1].id + 1;
    counters.push({ id: id, value: 0 });
    this.setState({ counters });
  };

  render() {
    return (
      <Provider
        value={{
          counters: this.state.counters,
          totalCounters: this.state.counters.filter(c => c.value > 0).length,
          onReset: this.handleReset,
          onIncrement: this.handleIncrement,
          onDelete: this.handleDelete,
          onAdd: this.handleAdd
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { CountersProvider };
export default Consumer;
