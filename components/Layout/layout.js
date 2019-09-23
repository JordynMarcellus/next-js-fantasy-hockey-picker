import React, { memo } from "react";
import { Global } from "@emotion/core";
import Head from "next/head";
import Nav from "../nav";
import { GlobalStyles, StyledLayout } from "./layout.styles";

const Layout = memo(props => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Head>
        <title>Fantasy Hockey Picker</title>
      </Head>
      <Nav />
      <StyledLayout>{props.children}</StyledLayout>
    </>
  );
});

export default Layout;
