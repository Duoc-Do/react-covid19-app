import React, { Component } from "react";
import { DebounceInput } from "react-debounce-input";
class SearchBar extends Component {
  state = { term: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Country Search:</label>
            <DebounceInput
              debounceTimeout={300}
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="Input country..."
            />
          </div>
        </form>
        <div className="ui mini label" style={{ backgroundColor: "white" }}>
          <i>Default: Viet Nam (any case not data or not found)</i>
        </div>
      </div>
    );
  }
}

export default SearchBar;
