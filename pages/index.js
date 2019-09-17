import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { get } from "axios";

const Home = props => (
  <div>
    <Head>
      <title>Fantasy Picker</title>
    </Head>

    <Nav />

    <div className="hero">
      <p>{props.players.length}</p>
      {props.players.map(player => (
        <div
          key={player.id}
          className={player.selected ? "selected" : "not-selected"}>
          <h1>
            {player.name} ({player.position})
          </h1>
          <ul>
            <li>{player.team}</li>
            <li>
              Corsica rank: {player.position}-{player.rank}
            </li>
            <li>Corsica rating: {player.rating}</li>
          </ul>
        </div>
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
