import React from "react";

import { Grid } from "@material-ui/core";

import classes from "./sampleBox.module.css";

const SampleBox = () => {
  return (
    <Grid item sm={4} md={3} lg={3}>
      <div className={classes.img}>
        <img src="/img/mountain.jpg" />
      </div>
      <div className={classes.title}>
        <i className="fas fa-cart-plus"></i>
        <h3>Wallmart's app-tastic stores</h3>
      </div>
      <div className={classes.tag}>
        <p>Tuesday, October 20, 2020</p>
      </div>
    </Grid>
  );
};

export default SampleBox;
