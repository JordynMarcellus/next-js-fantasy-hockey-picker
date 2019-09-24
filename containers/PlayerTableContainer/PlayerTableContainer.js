import React, { Component } from "react";
import Table from "../../components/Table/table";
import SearchForm from "../../components/searchForm";
import Axios, { get, patch } from "axios";

export const columns = [
  {
    label: "Corsica rank",
    componentKey: "corsica-rank",
  },
  {
    label: "Player name",
    componentKey: "player-name",
  },
  {
    label: "Current team",
    componentKey: "current-team",
  },
  {
    label: "Corsica rating",
    componentKey: "corsica-rating",
  },
  {
    label: "Drafted?",
    componentKey: "drafted",
  },
];

class PlayerTableContainer extends Component {
  //   we copy our players into state initially because this is done through `getInitialProps` -- i would almost never do this in a prod app, but because we only need a single copy of initial state that comes from props I'm doing this in a short-hand way which I fully acknowledge is Not Ideal
  // Don't do this in prod, but for a fun little personal project...
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.data,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handlePlayerSelect = this.handlePlayerSelect.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  //   INTERESTING -> we do it in componentDidMount, we get a blank table with headers. we copy it into state, we get a table...
  //   probably has to do with data hydration and initial server-side render 🤓

  onSearchSubmit = async query => {
    try {
      const { data } = await get("http://localhost:9009/players/search", {
        params: {
          q: query,
        },
      });
      this.setState({
        players: data,
      });
    } catch (e) {
      console.error(e);
    }
  };

  // submit form, fetch data and submit
  onFormSubmit = async ({ filters, sortOrder }) => {
    try {
      const { data } = await get("http://localhost:9009/players", {
        params: {
          filter: filters,
          sort: sortOrder,
        },
      });
      this.setState({
        players: data,
      });
    } catch (e) {
      console.error(e);
    }
  };

  handlePlayerSelect = async ({ playerId, value }) => {
    try {
      await patch(`http://localhost:9009/players/${playerId}`, {
        selected: value,
      });
      const { data } = await get("http://localhost:9009/players");

      this.setState({
        players: data,
      });
      // re-fetch data, put in state 😂 -- this is admittedly jank
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <>
        <SearchForm
          onSearchSubmit={this.onSearchSubmit}
          onFormSubmit={this.onFormSubmit}
        />
        <Table
          columns={columns}
          players={this.state.players}
          selectPlayer={this.handlePlayerSelect}
        />
      </>
    );
  }
}

export default PlayerTableContainer;
