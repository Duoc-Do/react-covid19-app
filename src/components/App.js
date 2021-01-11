import React, { Component } from "react";
import covidApi from "../api/covidApi";
import CountryTotalAllStatus from "./CountryTotalAllStatus";

import SearchBar from "./SearchBar";
class App extends Component {
  state = { statusConfirmed: [] };
  componentDidMount() {
    this.onSearchSubmit("vietnam");
  }
  onSearchSubmit = async (term) => {
    try {
      const response = await covidApi.get("/total/country/" + term);
      this.setState({ statusConfirmed: response.data });
    } catch (error) {
      const response = await covidApi.get("/total/country/" + "vietnam");
      alert(
        "Sorry! Not Found - We will use default country - Vietnam. Please input again."
      );
      this.setState({ statusConfirmed: response.data });
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <h1 className="ui header">
          <span>CORONAVIRUS COVID19</span>
          <div className="sub header">
            COVID-APP: Returns all cases by case type for a country. Cases must
            be one of: confirmed, recovered, deaths
          </div>
        </h1>

        <SearchBar onSubmit={this.onSearchSubmit} />

        <CountryTotalAllStatus allStatus={this.state.statusConfirmed} />
      </div>
    );
  }
}

export default App;
