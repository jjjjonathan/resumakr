import React from "react";
import Line from "../components/Line";
import Button from "../components/Button";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      phone: "",
      email: "",
      editMode: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState((state) => {
      if (state.editMode === true) {
        return { editMode: false };
      } else {
        return { editMode: true };
      }
    });
  }

  render() {
    return (
      <div className="mt-5">
        <form noValidate onSubmit={this.handleSubmit}>
          <Line
            editMode={this.state.editMode}
            id="fullName"
            title="Full Name"
            value={this.state.fullName}
            onChange={this.handleChange}
            className="display-4 mb-3"
          />
          <Line
            editMode={this.state.editMode}
            id="phone"
            title="Phone Number"
            value={this.state.phone}
            onChange={this.handleChange}
            className="h5"
          />
          <Line
            editMode={this.state.editMode}
            id="email"
            title="Email Address"
            value={this.state.email}
            onChange={this.handleChange}
            className="h5"
          />
          <Button editMode={this.state.editMode} />
        </form>
        <hr />
      </div>
    );
  }
}
