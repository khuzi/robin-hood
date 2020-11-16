import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Text from "../../components/Text/Text";
import Podcast from "../../components/podcast/Podcast";
import Subscribe from "../../components/subscribe/Subscribe";

import classes from "../../styles/snacksBlog.module.css";

export default function Bost({ postData }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading Page Data...</div>;
  }

  const { bloggs, snackinlist } = postData;
  const { snacklist, end } = snackinlist;

  console.log(process.env.API_URL);

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
        src={"https://gentle-inlet-94803.herokuapp.com" + postData.img.url}
        style={{ height: "100%", width: "100%" }}
      />
      <h3>Hey Snackers</h3>
      <div className={classes.heyText}>
        <p>{postData.heytext}</p>
      </div>
      <br />
      <hr style={{ border: "1px solid #eee" }} />
      <div className={classes.blogs}>
        {bloggs.map((blog, i) => {
          const { keyword, title, detail, takaway } = blog;
          return (
            <React.Fragment key={i}>
              <div className={classes.keyword}>
                <h3>{keyword}</h3>
              </div>
              <div className={classes.title}>
                <h1>
                  {i + 1}. {title}
                </h1>
              </div>
              <div className={classes.details}>
                {detail.map((item, i) => {
                  const { list } = item;
                  return (
                    <React.Fragment key={i}>
                      <Text html={item.text} styl={{ fontSize: "16px" }} />
                      <div>
                        <ul style={{ listStyle: "initial", marginTop: "3rem" }}>
                          {list.map((li, i) => (
                            <li style={{ marginTop: "-1rem" }} key={i}>
                              <Text html={li} styl={{ fontSize: "16px" }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
              <div style={{ marginTop: "3rem" }}>
                <h3>THE TAKEAWAY</h3>
                <Text html={takaway} styl={{ fontSize: "16px" }} />
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <br />
      <hr style={{ border: "1px solid #eee" }} />
      <div className={classes.snackin}>
        <h2>What else we’re Snackin’</h2>
        <ul style={{ listStyle: "initial" }}>
          {snacklist.map((li, i) => (
            <li key={i} style={{ marginLeft: "-1.5rem" }}>
              <Text html={li} styl={{ fontSize: "16px" }} />
            </li>
          ))}
          <Text html={end} styl={{ fontSize: "16px", marginLeft: "-3rem" }} />
        </ul>
      </div>
      <Podcast />
      <Subscribe />
    </section>
  );
}

export async function getStaticPaths() {
  const paths = ["/snacks/1", "/snacks/2", "/snacks/3"];
  return { paths, fallback: true };
}

export async function getStaticProps({ query, params }) {
  const { API_URL } = process.env;
  const { id } = query || params;

  const res = await fetch(
    `https://gentle-inlet-94803.herokuapp.com/snacksblogs/${id}`
  );
  const postData = await res.json();

  return {
    props: {
      postData,
    },
  };
}
