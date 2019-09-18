import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { get } from "axios";

const Home = props => (
  <div>
    <Head>
      <title>Fantasy Hockey Picker</title>
    </Head>

    <Nav />

    <div className="hero">
      <table>
        <thead>
          <tr>
            <th>Player name/position</th>
            <th>Current team</th>
            <th>Corsica rank</th>
            <th>Corsica rating</th>
          </tr>
        </thead>
      </table>
      <tbody></tbody>
      {props.players.map(player => (
        <tr
          key={player.id}
          className={player.selected ? "selected" : "not-selected"}>
          <td>
            {player.name} ({player.position})
          </td>
          <td>{player.team}</td>
          <td>
            {player.position}-{player.rank}
          </td>
          <td>{player.rating}</td>
        </tr>
      ))}
    </div>
  </div>
);

Home.getInitialProps = async function(context) {
  try {
    const response = await get("http://localhost:9009/players");
    const { data } = response;
    return { players: data };
  } catch (e) {
    console.error(e);
    return { players: [] };
  }
};

export default Home;
