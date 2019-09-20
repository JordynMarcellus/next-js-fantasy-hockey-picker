import React, { useEffect, useState } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Table from "../components/table";
import * as indexStyles from "./index.styles";
import { get, patch } from "axios";

const Home = props => {
  console.log(props.players);
  return (
    <div>
      <Head>
        <title>Fantasy Hockey Picker</title>
      </Head>
      <Nav />
      {/* let's dry this up when we get to making more tables... */}
      <indexStyles.StyledLayout>
        <Table players={props.players} />
      </indexStyles.StyledLayout>
    </div>
  );
};

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
