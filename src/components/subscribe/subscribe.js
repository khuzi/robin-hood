import React from "react";

import classes from "./subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={classes.subscribe}>
      <div className="mainWarper">
        <div className={classes.heading}>
          <h2>Subscribe to Robinhood Snacks</h2>
        </div>
        <div className={classes.inp}>
          <input placeholder="example@example.com" />
          <i className="fas fa-arrow-right"></i>
        </div>
        <div className={classes.socialLinks}>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
