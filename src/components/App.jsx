import React, { Component } from "react";
import SearchBar from "./SearchBar";
import credentials from "./credentials";
import Videos from "./Videos";

class App extends Component {
  state = { response: [] };
  onFormSubmit = term => {
    credentials
      .get("/search", {
        params: {
          q: term
        }
      })
      .then(response => {
        this.setState({ response: response });
      });
  };
  render() {
    return (
      <>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <Videos response={this.state.response} />
      </>
    );
  }
}

export default App;
