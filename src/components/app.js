import React, { Component } from "react";

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <input
          className="btn btn-primary"
          type="submit"
          value="Alert"
          onClick={() => {
            alert("Alert button onClick");
          }}
        />
      </div>
    );
  }
}
