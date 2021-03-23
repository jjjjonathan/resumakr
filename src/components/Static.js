import React from "react";

export default class Static extends React.Component {
  render() {
    let staticLine;

    if (this.props.displayTitle) {
      staticLine = (
        <div className={this.props.className} id={this.props.id}>
          {this.props.title}: {this.props.value}
        </div>
      );
    } else {
      staticLine = (
        <div className={this.props.className} id={this.props.id}>
          {this.props.value}
        </div>
      );
    }

    return staticLine;
  }
}
