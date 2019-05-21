import React, { Component } from "react";

export default class App extends Component {
  state = {};
  authFunc = () => {
    const authData = { data: "Auth on my site" };
    if (WavesKeeper) {
      WavesKeeper.auth(authData)
        .then(auth => {
          console.log(auth); //displaying the result on the console
          /*...processing data */
        })
        .catch(error => {
          console.error(error); // displaying the result on the console
          /*...processing errors */
        });
    } else {
      alert("To Auth WavesKeeper should be installed.");
    }
  };

  render() {
    return (
      <div className="container">
        <input
          className="btn btn-primary"
          type="submit"
          value="Alert"
          onClick={this.authFunc}
        />
      </div>
    );
  }
}
