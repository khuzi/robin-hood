import React from "react";

import { Grid, Button } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import ShareBox from "./shareBox/ShareBox";

import classes from "./shares.module.css";

const Shares = () => {
  return (
    <div className={classes.shares}>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.imgSmall}></div>
        </Grid>
      </Grid>
      <div className="mainWarper">
        <Grid container className={classes.row1}>
          <Grid item xs={8}>
            <div>
              <h2>Intoducing Fractionl Shares</h2>
              <div>
                <p>Invest in thousands of stocks with as little as $1.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            <div className={classes.imgLarge}></div>
          </Grid>
        </Grid>
        <Grid container>
          <ShareBox />
          <ShareBox />
          <ShareBox />
        </Grid>
        <Grid container>
          <div className={classes.btn}>
            <Button startIcon={<InfoOutlinedIcon />}>
              Fractional Shares Disclosure
            </Button>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Shares;
