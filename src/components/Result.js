import React, { Component } from "react";

export default class Result extends Component {
  render() {
    return (
      <div
        className="center-container result-container"
        style={this.props.data.req ? { width: "250px" } : { width: 0 }}
      >
        <h4>
          City: <span>{this.props.data.city}</span>
        </h4>
        <h4>
          Temperature: <span>{this.props.data.temperature}</span>
        </h4>
        <h4>
          Humidity: <span>{this.props.data.humidity}</span>
        </h4>
        <h4>
          Description:{" "}
          <span style={{ textTransform: "capitalize" }}>
            {this.props.data.description}
          </span>
        </h4>
      </div>
    );
  }
}
