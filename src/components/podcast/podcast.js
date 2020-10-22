import React from "react";

import classes from "./podcast.module.css";

const Podcast = () => {
  return (
    <div className={classes.podcast}>
      <div className="mainWarper">
        <div className={classes.heading}>
          <h1>Enjoy More With the Daily Podcast</h1>
        </div>
        <div className={classes.para}>
          <p>
            Get an entertaining breakdown of our top 3 business stories in
            15-minutes. Pairs perfectly with your commute, workout, or morning
            oatmeal ritual.
          </p>
        </div>
        <div className={classes.items}>
          <div className={classes.item}>
            <img src="https://snacks.robinhood.com/apple@2x__d64db45f868bb62da7303b2aec54d0c1.png" />
          </div>
          <div className={classes.item}>
            <img src="https://snacks.robinhood.com/google__0c1304577ebbb17bcead40cfa5d8b3ab.png" />
          </div>
          <div className={classes.item}>
            <img src="https://snacks.robinhood.com/spotify__32a0c9212c2f377db370853b806a8afb.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
