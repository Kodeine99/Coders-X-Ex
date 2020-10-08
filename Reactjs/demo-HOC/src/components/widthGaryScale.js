import React, { Component } from "react";

export default function (BlackWhiteComponent, options = 100) {
  return class extends Component {
    onMouseEnter() {
      this.setState({
        grayScale: 0
      });
    }
    render() {
      return (
        <div
          style={{
            filter: `grayscale(${options})`
          }}
        >
          <BlackWhiteComponent {...this.props} />
        </div>
      );
    }
  };
}
