import React from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import Nav from "../components/nav";
import * as indexStyles from "./index.styles";
import { get } from "axios";

const Home = props => (
  <div>
    <Head>
      <title>Fantasy Hockey Picker</title>
    </Head>

    <Nav />

    <indexStyles.StyledLayout>
      <indexStyles.StyledTable>
        <thead>
          <tr>
            <indexStyles.StyledCell as="th">
              Corsica rank
            </indexStyles.StyledCell>
            <indexStyles.StyledCell as="th">
              Player name/position
            </indexStyles.StyledCell>
            <indexStyles.StyledCell as="th">
              Current team
            </indexStyles.StyledCell>
            <indexStyles.StyledCell as="th">
              Corsica rating
            </indexStyles.StyledCell>
          </tr>
        </thead>
        <tbody>
          {props.players.map(player => (
            <indexStyles.StyledRow
              key={player.id}
              className={player.selected ? "selected" : "not-selected"}>
              <indexStyles.StyledCell>
                <indexStyles.RankingAvatar position={player.position}>
                  <span>
                    {player.position}
                    {player.rank}
                  </span>
                </indexStyles.RankingAvatar>
              </indexStyles.StyledCell>
              <indexStyles.StyledCell>{player.name}</indexStyles.StyledCell>
              <indexStyles.StyledCell>{player.team}</indexStyles.StyledCell>
              <indexStyles.StyledCell isNumber>
                {player.rating}
              </indexStyles.StyledCell>
            </indexStyles.StyledRow>
          ))}
        </tbody>
      </indexStyles.StyledTable>
    </indexStyles.StyledLayout>
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
