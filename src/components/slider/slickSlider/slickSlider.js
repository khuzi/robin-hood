import React, { Component } from "react";
import Slider from "react-slick";
import MagicSliderDots from "react-magic-slider-dots";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-magic-slider-dots/dist/magic-dots.css";
import classes from "./slickSlider.module.css";

import { Grid } from "@material-ui/core";

class CustomSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => {
        return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />;
      },
    };

    return (
      <Slider {...settings}>
        <Grid container>
          <Grid item xs={12} className={classes.img}>
            <img src="/img/Screen-1.png" />
          </Grid>
          <Grid item xs={12} className={classes.textWarper}>
            <div className={classes.title}>
              <h1>Learn As You Grow</h1>
            </div>
            <div className={classes.para}>
              <p>
                Learn As You Grow Our goal is to make investing in financial
                markets more affordable, more intuitive, and more fun, no matter
                how much experience you have (or don’t have).
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} className={classes.img}>
            <img src="/img/Screen-2.png" />
          </Grid>
          <Grid item xs={12} className={classes.textWarper}>
            <div className={classes.title}>
              <h1>Manage Your Portfolio</h1>
            </div>
            <div className={classes.para}>
              <p>
                Keep your portfolio in your pocket. Everything you need to
                manage your assets is available in a single app.
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} className={classes.img}>
            <img src="/img/Screen-2.png" />
          </Grid>
          <Grid item xs={12} className={classes.textWarper}>
            <div>
              <h1 className={classes.title}>Keep Tabs on Your Money</h1>
            </div>
            <div className={classes.para}>
              <p>
                Set up customized news and notifications to stay on top of your
                assets as casually or as relentlessly as you like. Controlling
                the flow of info is up to you.
              </p>
            </div>
          </Grid>
        </Grid>
      </Slider>
    );
  }
}

export default CustomSlider;


