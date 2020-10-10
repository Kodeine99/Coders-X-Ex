import React, { Component } from "react";

export const AppContext = React.createContext();
export class AppProvider extends Component {
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
