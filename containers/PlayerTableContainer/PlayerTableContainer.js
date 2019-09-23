import React, { Component } from "react";
import Table from "../../components/Table/table";
import SearchForm from "../../components/searchForm";
import { patch } from "axios";

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

const selectPlayer = async ({ playerId, value }) => {
  try {
    await patch(`http://localhost:9009/players/${playerId}`, {
      selected: value,
    });
    // re-fetch data, put in state 😂 -- this is admittedly jank
  } catch (e) {
    console.error(e);
  }
};

class PlayerTableContainer extends Component {
  //   we copy our players into state initially because this is done through `getInitialProps` -- i would almost never do this in a prod app, but because we only need a single copy of initial state that comes from props I'm doing this in a short-hand way which I fully acknowledge is Not Ideal

  constructor(props) {
    super(props);
    this.state = {
      players: this.props.data,
    };
  }
  //   INTERESTING -> we do it in componentDidMount, we get a blank table with headers. we copy it into state, we get a table...
  //   probably has to do with data hydration and initial server-side render 🤓
  // Don't do this in prod, but for a fun little personal project...

  //   componentDidMount() {
  //     this.setState({
  //       players: this.props.data,
  //     });
  //   }
  render() {
    return (
      <>
        <SearchForm />
        <Table
          columns={columns}
          players={this.state.players}
          selectPlayer={selectPlayer}
        />
      </>
    );
  }
}

export default PlayerTableContainer;
