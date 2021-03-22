import React from "react";

export default class Static extends React.Component {
  render() {
    return (
      <div className={this.props.className} id={this.props.id}>
        {this.props.value}
      </div>
    );
  }
}
