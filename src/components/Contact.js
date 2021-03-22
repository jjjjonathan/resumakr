import React from "react";
import Line from "../components/Line";

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
    this.setState({ editMode: false });
  }

  render() {
    return (
      <div>
        <form
          noValidate
          className="needs-validation"
          onSubmit={this.handleSubmit}
        >
          <Line
            editMode={this.state.editMode}
            id="fullName"
            title="Full Name"
            value={this.state.fullName}
            onChange={this.handleChange}
          />
          <Line
            editMode={this.state.editMode}
            id="phone"
            title="Phone Number"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <Line
            editMode={this.state.editMode}
            id="email"
            title="Email Address"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
