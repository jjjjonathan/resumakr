import React from "react";
import Contact from "./components/Contact";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="mt-5">resumakr</h1>
        <p className="lead">easy resume builder</p>
        <Contact />
      </div>
    );
  }
}
