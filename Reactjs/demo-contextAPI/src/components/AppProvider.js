import React, { Component } from "react";

import AppContext from "../contexts/AppContext";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Demo React Context API",
      id: 1
    };
    this.updateId = this.updateId.bind(this);
  }
  updateId() {
    this.setState({
      id: Math.random()
    });
  }
  render() {
    return (
      <AppContext.Provider
        value={{
          title: this.state.title,
          id: this.state.id,
          updateId: this.updateId
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
