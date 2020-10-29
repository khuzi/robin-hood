import React from "react";

import { Grid } from "@material-ui/core";

import classes from "./showcase.module.css";

const Showcase = () => {
  return (
    <div className={classes.showcase}>
      <div className="mainWarper">
        <div className={classes.warper}>
          <Grid container>
            <Grid item sm={12} md={5}>
              <div className={classes.content}>
                <div className={classes.heading}>
                  <h1>Investing for</h1>
                  <h1>Everyone</h1>
                </div>
                <div className={classes.text}>
                  <h3>
                    Robinhood, a pioneer of commission-free investing, gives you
                    more ways to make your money work harder.
                  </h3>
                </div>
                <div className={classes.signBtn}>
                  <button>Sign Up</button>
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

export default Showcase;
