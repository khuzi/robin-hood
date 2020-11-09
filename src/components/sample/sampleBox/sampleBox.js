import React from "react";
import Link from "next/link";

import { Grid } from "@material-ui/core";

import classes from "./sampleBox.module.css";

const SampleBox = ({ title, src, date, id }) => {
  return (
    <Grid item sm={4} md={3} lg={3}>
      <div className={classes.img}>
        <img src={src} />
      </div>
      <div className={classes.title}>
        <Link href="/snacks/[id]" as={"/snacks/" + id}>
          <a>
            <h3>{title}</h3>
          </a>
        </Link>
      </div>
      <div className={classes.tag}>
        <p>{date}</p>
      </div>
    </Grid>
  );
};

export default SampleBox;
