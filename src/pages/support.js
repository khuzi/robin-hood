import React from "react";
import Head from "next/head";

import { Grid } from "@material-ui/core";

import SupportBox from "../components/supportBox/supportBox";

import classes from "../styles/support.module.css";

const data = [1, 2, 3, 4, 5, 6, 7];

const support = () => {
  return (
    <div>
      <Head>
        <title>Robinhood Help Center</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="mainWarper">
        <Grid container style={{ marginTop: "5rem" }}>
          <Grid item xs={12} className={classes.heading}>
            <h1>Hello!</h1>
            <h1>How can we help?</h1>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.inp}>
              <i
                style={{ position: "absolute", left: "10px" }}
                className="fa fa-search"
              ></i>
              <input placeholder="Search" />
              <i
                style={{
                  position: "absolute",
                  right: "15px",
                  cursor: "pointer",
                  display: "none",
                }}
                className="fas fa-times"
              ></i>
            </div>
          </Grid>
        </Grid>
        <Grid container style={{ marginBottom: "5rem" }}>
          {data.map((box) => (
            <SupportBox
              key={box}
              title="Getting Started"
              t1="What You Need to Get Started"
              t2="Investments You Can Make on Robinhood"
              t3="Open My Account"
            />
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default support;
