//=====================================Snacks Page===============================

import React, { useEffect } from "react";
import Head from "next/head";

import SnacksShowcase from "../../components/snacksShowcase/SnacksShowcase";
import Sample from "../../components/sample/sample";
import Podcast from "../../components/podcast/podcast";
import AboutSnacks from "../../components/aboutSnacks/aboutSnacks";
import News from "../../components/news/news";
import Subscribe from "../../components/subscribe/subscribe";

const snacks = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Robinhood Snacks</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SnacksShowcase />
      <Sample blogs={blogs} />
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

export async function getStaticProps() {
  const res = await fetch(
    "https://gentle-inlet-94803.herokuapp.com/snacksblogs"
  );
  const blogs = await res.json();

  return {
    props: {
      blogs,
    },
  };
}
