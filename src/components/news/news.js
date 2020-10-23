import React from "react";

import { Grid } from '@material-ui/core';

import NewsBox from "../sample/sampleBox/SampleBox";

import classes from "./news.module.css";

const News = () => {
  return (
    <div className={classes.news}>
      <div className="mainWarper">
        <div className={classes.heading}>
          <h1>Snacks in the News</h1>
        </div>
        <Grid container justify="space-around" spacing={2}>
          <NewsBox />
          <NewsBox />
          <NewsBox />
        </Grid>
      </div>
    </div>
  );
};

export default News;
