import React from "react";
import Head from "next/head";
const Nav = (await import("../components/nav")).default;
const _ = await import("lodash");
console.log("lodash is shared", _);
const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <div className="hero">
      <h1 className="title">
       HOME
      </h1>
    </div>
  </div>
);

export default Home;
