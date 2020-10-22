import React from "react";

import classes from "./aboutSnacks.module.css";

const AboutSnacks = () => {
  return (
    <div className={classes.about}>
      <div className="mainWarper">
        <div className={classes.content}>
          <div className={classes.heading}>
            <h1>About Us</h1>
          </div>
          <div className={classes.para}>
            <p>
              Robinhood Snacks was previously MarketSnacks, a media company that
              makes financial news digestible. Jack Kramer and Nick Martell
              founded MarketSnacks in 2012 and haven’t missed a day covering
              markets since. Testimonial Disclosures
            </p>
          </div>
        </div>
        <div className={classes.content2}>
          <div className={classes.text1}>
            <h2>“Simply the most fun business news you can get.”</h2>
          </div>
          <div className={classes.text2}>
            <h2>
              “Perfect for the Everyman to understand what’s happening in
              business, tech, & industry.”
            </h2>
          </div>
        </div>
        <div className={classes.bottomPic}>
          <img src="https://snacks.robinhood.com/seal__a44c7a630bcfdb7eb4918c4314548f16.svg" />
        </div>
      </div>
    </div>
  );
};

export default AboutSnacks;
