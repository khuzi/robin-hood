import React, { useState, useReducer, useEffect } from "react";

import { Grid, Hidden } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import Slide from "./slide/slide";
import SlickSlider from "./slickSlider/slickSlider";

import classes from "./slider.module.css";

const statusReducer = (currStatus, action) => {
  switch (action.type) {
    case "LEARN":
      return { learn: true, manage: false, customize: false };
    case "MANAGE":
      return { learn: false, manage: true, customize: false };
    case "CUSTOMIZE":
      return { learn: false, manage: false, customize: true };
    default:
      throw new Error("Should not reached...");
  }
};

const Slider = () => {
  const [slideNum, setSlideNum] = useState(1);
  const [statusState, statusDispatch] = useReducer(statusReducer, {
    learn: true,
    manage: false,
    customize: false,
  });
  const slideForwardHandler = () => {
    if (slideNum === 3) {
      setSlideNum(1);
      statusDispatch({ type: "LEARN" });
    } else {
      setSlideNum((prevNum) => prevNum + 1);
    }
  };

  const slideBackwardHandler = () => {
    if (slideNum === 1) {
      setSlideNum(3);
      statusDispatch({ type: "CUSTOMIZE" });
      console.log("Status = ", statusState);
    } else {
      setSlideNum((prevNum) => prevNum - 1);
    }
  };

  return (
    <div className={classes.slider}>
      <Hidden only={["lg", "xl"]}>
        <SlickSlider />
      </Hidden>
      <Hidden only={["md", "sm", "xs"]}>
        <Grid container style={{ height: "100%" }}>
          <Grid
            item
            xs={3}
            style={{ margin: "auto", cursor: "pointer", textAlign: "right" }}
          >
            <ul>
              <li>
                <div>
                  <ArrowUpwardIcon
                    className={classes.arrows}
                    onClick={slideBackwardHandler}
                  />
                </div>
              </li>
              <li>
                <div onClick={() => setSlideNum(1)}>
                  <h3>Learn</h3>
                </div>
              </li>
              <li>
                <div onClick={() => setSlideNum(2)}>
                  <h3>Manage</h3>
                </div>
              </li>
              <li>
                <div onClick={() => setSlideNum(3)}>
                  <h3>Customize</h3>
                </div>
              </li>
              <li>
                <div>
                  <ArrowDownwardIcon
                    className={classes.arrows}
                    onClick={slideForwardHandler}
                  />
                </div>
              </li>
            </ul>
          </Grid>
          <Slide slideNum={slideNum} />
        </Grid>
      </Hidden>
    </div>
  );
};

export default Slider;
