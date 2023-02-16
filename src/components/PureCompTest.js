import React, { Component } from "react";

export default class PureCompTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themeColor: "light",
    };
  }

  handleSetDarkTheme = () => {
    this.setState({
      themeColor: "dark",
    });
  }

  render() {
    return (
      <>
        {this.state.themeColor}
        <button onClick={this.handleSetDarkTheme}>Change Theme</button>
      </>
    );
  }
}
