import React from "react";
import PlayerTableContainer from "../containers/PlayerTableContainer/PlayerTableContainer";
import Layout from "../components/Layout/layout";
import { get } from "axios";

const Home = props => {
  return (
    <Layout>
      <PlayerTableContainer data={props.players} />
    </Layout>
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
