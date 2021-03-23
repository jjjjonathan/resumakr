import React from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="mt-5">resumakr</h1>
        <p className="lead">easy resume builder</p>
        <Contact />
        <Education />
        <Experience />
      </div>
    );
  }
}
