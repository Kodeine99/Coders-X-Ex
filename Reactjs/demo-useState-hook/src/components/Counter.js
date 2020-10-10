import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1
    };
    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState((state) => {
      return {
        number: state.number + 1
      };
    });
  }
  render() {
    const { number } = this.state;
    return (
      <div className="Counter">
        <h1>{number}</h1>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}
