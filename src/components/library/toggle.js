import React, { Component } from "react";

class Toggle extends Component {
  render() {
    return (
      <>
        <label className={this.props.className + " Toggle"}>
          <input
            onChange={this.props.onChange}
            defaultChecked={this.props.checked}
            type="checkbox"
          />
          <span></span>
        </label>
      </>
    );
  }
}

export default Toggle;
