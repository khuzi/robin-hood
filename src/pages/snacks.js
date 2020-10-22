import React from "react";
import Head from "next/head";

import SnacksShowcase from "../components/snacksShowcase/snacksShowcase";
import Sample from "../components/sample/sample";
import Podcast from "../components/podcast/podcast";
import AboutSnacks from "../components/aboutSnacks/aboutSnacks";
import News from "../components/news/news";
import Subscribe from "../components/subscribe/subscribe";

const snacks = () => {
  return (
    <>
      <Head>
        <title>Robinhood Snacks</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SnacksShowcase />
      <Sample />
      <Podcast />
      <AboutSnacks />
      <News />
      <div className="mainWarper">
        <hr style={{ height: "1px", background: "#eee" }} />
      </div>
      <Subscribe />
    </>
  );
};

export default snacks;
