import React from "react";

import { Grid } from "@material-ui/core";

import SampleBox from "./sampleBox/SampleBox";

import classes from "./sample.module.css";

const Sample = ({ blogs }) => {
  return (
    <div className={classes.sample}>
      <div className="mainWarper">
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.heading}>
              <h1>Try a Sample</h1>
            </div>
          </Grid>
        </Grid>
        <Grid container justify="space-around" spacing={2}>
          {blogs.map((blog) => (
            <SampleBox
              title={blog.title}
              date={blog.date}
              src={"https://gentle-inlet-94803.herokuapp.com" + blog.img.url}
              id={blog.id}
              key={blog.id}
            />
          ))}
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.btn}>
              <button>See Past Snacks</button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Sample;
