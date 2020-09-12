import React, { Component } from "react";

class TontonItem extends Component {
  render() {
    return (
      <div className="TontonItem">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default TontonItem;
