import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    //todo commit form search
    this.props.onFormSubmit(this.state.term)
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type='text'
          onChange={this.onInputChange}
          value={this.state.term}
        />
      </form>
    );
  }
}

export default SearchBar;
