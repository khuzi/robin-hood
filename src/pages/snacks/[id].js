import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Podcast from "../../components/podcast/Podcast";
import Subscribe from "../../components/subscribe/Subscribe";

import classes from "../../styles/snacksBlog.module.css";

export default function Bost({ postData }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading Page Data...</div>;
  }

  return (
    <section className={classes.blog}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={classes.heading}>
        <h1>{postData.title}</h1>
      </div>
      <div className={classes.date}>
        <p>{postData.created}</p>
      </div>
      <img
        src={"http://localhost:1337" + postData.img[0].url}
        style={{ height: "100%", width: "100%" }}
      />
      <h3>Hey Snackers</h3>
      <div className={classes.heyText}>
        <p>{postData.heytext}</p>
      </div>
      <Podcast />
      <Subscribe />
    </section>
  );
}

// Post.getInitialProps = async ({ query }) => {
//   const { id } = query;

//   return { id };
// };

export async function getStaticPaths() {
  const paths = ["/snacks/1", "/snacks/2", "/snacks/3"];
  return { paths, fallback: true };
}

export async function getStaticProps({ query, params }) {
  const { id } = query || params;

  const res = await fetch(`http://localhost:1337/snacksblogs/${id}`);
  const postData = await res.json();

  return {
    props: {
      postData,
    },
  };
}

/*
export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const postData = await res.json();
  return {
    props: {
      postData,
    },
  };
}
*/
