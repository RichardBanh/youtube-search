import React, { Component } from "react";
import SearchBar from "./SearchBar";
import credentials from "./credentials";
import Videos from "./Videos";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = { response: [], selectedvid: null };

  componentDidMount() {
    this.onFormSubmit("pokemon");
  }

  onFormSubmit = term => {
    credentials
      .get("/search", {
        params: {
          q: term
        }
      })
      .then(response => {
        this.setState({
          response: response.data.items,
          selectedvid: response.data.items[0]
        });
      });
  };

  onVideoSelect = video => {
    this.setState({ selectedvid: video });
    console.log("from the app", video);
  };
  render() {
    return (
      <>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <VideoDetail video={this.state.selectedvid} />
        <Videos
          videos={this.state.response}
          onVideoSelect={this.onVideoSelect}
        />
      </>
    );
  }
}

export default App;
