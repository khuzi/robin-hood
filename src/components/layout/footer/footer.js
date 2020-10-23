import React from "react";
import Link from "next/link";

import { Button, Grid, Hidden } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className="mainWarper">
        <Hidden only={["lg", "xl"]}>
          <Grid container>
            <Grid item xs={12} sm={8}>
              <div>
                <h1>Snacks</h1>
              </div>
              <div>
                <p style={{ color: "rgb(121,133,139)" }}>
                  The 3-minute newsletter with fresh takes on the financial news
                  you need to start your day.
                </p>
              </div>
              <form>
                <div className={classes.inp}>
                  <input placeholder="name@email.com" />
                  <div className={classes.btn}>
                    <button>Subscribe</button>
                  </div>
                </div>
              </form>
            </Grid>
          </Grid>
        </Hidden>
        <Grid container>
          <Grid item container md={12} lg={8}>
            <Grid item xs={12} md={4} lg={3}>
              <ul className={classes.f_ul}>
                <li>Stocks & Funds</li>
                <li>Options</li>
                <li>Gold</li>
                <li>Cash Management</li>
                <li>Crypto</li>
              </ul>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <ul>
                <li>Learn</li>
                <li>
                  <Link href="/support">
                    <a>Support</a>
                  </Link>
                </li>
                <li>
                  <Link href="/snacks">
                    <a>Snacks</a>
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <ul>
                <li>
                  <Link href="/about">
                    <a>About us</a>
                  </Link>
                </li>
                <li>Careers</li>
                <li>Company News</li>
                <li>
                  <div className={classes.socialLinks}>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                  </div>
                </li>
              </ul>
            </Grid>
          </Grid>
          <hr className={classes.s_hr} />
          <Hidden only={["md", "sm", "xs"]}>
            <Grid item xs={4} style={{ marginLeft: "-2rem" }}>
              <div>
                <h1>Snacks</h1>
              </div>
              <div>
                <p style={{ color: "rgb(121,133,139)" }}>
                  The 3-minute newsletter with fresh takes on the financial news
                  you need to start your day.
                </p>
              </div>
              <form>
                <div className={classes.inp}>
                  <input placeholder="name@email.com" />
                  <div className={classes.btn}>
                    <button>Subscribe</button>
                  </div>
                </div>
              </form>
            </Grid>
          </Hidden>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <ul className={classes.stairs}>
              <li>Check the background of the firm on FINRA’s BrokerCheck</li>
              <li>Brokerage Customer Relationship Summary</li>
              <li>Robinhood Terms & Conditions</li>
              <li>Disclosure Library</li>
              <li>Privacy</li>
            </ul>
          </Grid>
        </Grid>
        <hr className={classes.f_hr} />
        <Grid container>
          <Grid item xs={12}>
            <p>
              Robinhood means Robinhood Markets and its in-application and web
              experiences with its family of wholly owned subsidiaries which
              includes Robinhood Financial, Robinhood Securities, and Robinhood
              Crypto.
            </p>
          </Grid>
          <Grid item xs={12}>
            <p>
              All investments involve risks, including the possible loss of
              capital.
            </p>
          </Grid>
          <Grid item xs={12}>
            <p>
              Securities trading is offered to self-directed customers by
              Robinhood Financial. Robinhood Financial is a member of the
              Financial Industry Regulatory Authority (FINRA).
            </p>
          </Grid>
          <Grid item xs={12}>
            <Button
              startIcon={<InfoOutlinedIcon />}
              style={{ color: "#fff", marginTop: "1rem", marginBottom: "2rem" }}
            >
              View Important Disclosures
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
