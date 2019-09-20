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
    {/* let's dry this up when we get to making more tables... */}
    <indexStyles.StyledLayout>
      <indexStyles.StyledTable>
        <indexStyles.StyledTableHeader>
          <tr>
            <indexStyles.StyledCell as="th" textAlign="center">
              Corsica rank
            </indexStyles.StyledCell>
            <indexStyles.StyledCell as="th" textAlign="center">
              Player name/position
            </indexStyles.StyledCell>
            <indexStyles.StyledCell as="th" textAlign="center">
              Current team
            </indexStyles.StyledCell>
            <indexStyles.StyledCell as="th" textAlign="center">
              Corsica rating
            </indexStyles.StyledCell>
          </tr>
        </indexStyles.StyledTableHeader>
        <tbody>
          {props.players.map(player => (
            <indexStyles.StyledRow key={player.id} isDrafted={player.selected}>
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
              <indexStyles.StyledCell textAlign="right">
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
