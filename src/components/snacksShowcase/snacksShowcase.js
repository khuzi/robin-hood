import React from "react";

import { Grid } from "@material-ui/core";

import classes from "./snacksShowcase.module.css";

const SnacksShowcase = () => {
  return (
    <div className={classes.showcase}>
      <div className="mainWarper">
        <div className={classes.warper}>
          <Grid container>
            <Grid item xs={12} md={5}>
              <div className={classes.content}>
                <div className={classes.heading}>
                  <h1>Your Daily Dose of</h1>
                  <h1>Financial News</h1>
                </div>
                <div className={classes.text}>
                  <h5>
                    The 3-minute newsletter with fresh takes on the financial
                    news you need to start your day. Disclosures
                  </h5>
                </div>
                <div className={classes.newsLetter}>
                  <div className={classes.inp}>
                    <input placeholder="name@example.com"/>
                  </div>
                  <div className={classes.signBtn}>
                    <button>Subscribe</button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <div className={classes.imgBox}>
                <img src="/img/Screen-1.png" />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SnacksShowcase;
