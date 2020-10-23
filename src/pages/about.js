import React from "react";
import Head from "next/head";

import { Grid } from "@material-ui/core";

import classes from "../styles/about.module.css";

const perkData = [
  {
    img:
      "https://cdn.robinhood.com/assets/robinhood/next_brand/_next/static/images/salary__e81470cc3127a254341b8f949226f3d6.svg",
    text: "Competitive salary",
  },
  {
    img:
      "https://cdn.robinhood.com/assets/robinhood/next_brand/_next/static/images/insurance__376d4dfa0e431bcbda8754cbce2cb162.svg",
    text: "Premium medical, dental, and vision insurance",
  },
  {
    img:
      "https://cdn.robinhood.com/assets/robinhood/next_brand/_next/static/images/vacation__6e498944307ac5a80bcd5a11bae1af7c.svg",
    text: "Vacation time",
  },
  {
    img:
      "https://cdn.robinhood.com/assets/robinhood/next_brand/_next/static/images/food__e179c051bc6a39f9670443d2a68bb31f.svg",
    text: "Catered meals and a fully stocked kitchen",
  },
  {
    img:
      "https://cdn.robinhood.com/assets/robinhood/next_brand/_next/static/images/transportation__47f0aa1bd5bfa43229cc77d1d3733de3.svg",
    text: "Commuter benefits",
  },
  {
    img:
      "https://cdn.robinhood.com/assets/robinhood/next_brand/_next/static/images/health__27bbc3745ad2c0f72dc0af35089f9631.svg",
    text: "Health & wellness benefits",
  },
  {
    img:
      "https://cdn.robinhood.com/assets/robinhood/next_brand/_next/static/images/family__d92d0458f368b73348584f8742e246a5.svg",
    text: "Parental leave benefits",
  },
];

const investor = [
  "https://cdn.robinhood.com/assets/robinhood/next_brand/_next/static/images/DST__d74c93a82e80c730a5d19f6a43c239dd.png",
  "https://cdn.robinhood.com/assets/robinhood/next_brand/_next/static/images/Index__90f20ab2d82899dc7b00b425d0572411.png",
  "https://cdn.robinhood.com/assets/robinhood/next_brand/_next/static/images/Sequoia__f81f0c546e231b0a6ffed23e1ddee875.svg",
  "https://cdn.robinhood.com/assets/robinhood/next_brand/_next/static/images/KPCB__7244ece8c4b9eb50bf6c6cd3797bb562.svg",
  "https://cdn.robinhood.com/assets/robinhood/next_brand/_next/static/images/CapitalG__82e00956a4bd3444460c77e8e5a49287.svg",
  "https://cdn.robinhood.com/assets/robinhood/next_brand/_next/static/images/GoogleVentures__cf036c115f145b04da881100e0d82438.svg",
  "https://cdn.robinhood.com/assets/robinhood/next_brand/_next/static/images/ThriveCapital__008af466ef9e48083ce85520aaa1e338.png",
  "https://cdn.robinhood.com/assets/robinhood/next_brand/_next/static/images/Andreessen__b455c088ae2c9ccca37aa5f5625e59b0.png",
  "https://cdn.robinhood.com/assets/robinhood/next_brand/_next/static/images/NEA__aae28ebb7bdf03c89a2f297a91e9f1d2.png",
  "https://cdn.robinhood.com/assets/robinhood/next_brand/_next/static/images/RibbitCapital__a24b700cfb5a7dca2068cc782e775f38.png",
];

const About = () => {
  return (
    <div className={classes.about}>
      <Head>
        <title>Careers | Robinhood</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="mainWarper">
        <div className={classes.showcase}>
          <div className={classes.heading}>
            <h1>We’re on a mission to democratize finance for all.</h1>
            <button>View Openings</button>
          </div>
        </div>
      </div>
      <div className={classes.story}>
        <div className={classes.overlay}>
          <div className="mainWarper">
            <div className={classes.content}>
              <div className={classes.storyTitle}>
                <h1>Our Story</h1>
              </div>
              <div className={classes.txt1}>
                <h3>
                  Robinhood’s story begins almost a decade ago at Stanford,
                  where Baiju and Vlad met as roommates and classmates. After
                  graduation they packed their bags for New York and built two
                  finance companies, selling trading software to hedge funds.
                  With their newfound experience in the world of finance, they
                  realized that big Wall Street firms pay effectively nothing to
                  trade stocks, while most Americans are charged up to $10 for
                  every trade.
                </h3>
                <h4>
                  They soon decided it was more important to build products that
                  would provide everyone with access to the financial markets,
                  not just the wealthy. Two years after heading to New York,
                  they moved back to California and built Robinhood—a company
                  that leverages technology to encourage everyone to participate
                  in our financial system.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.values}>
        <div className="mainWarper">
          <div className={classes.valueContent}>
            <div className={classes.valTitle}>
              <h1>Our Values</h1>
            </div>
            <div className={classes.hd}>
              <h2>Exceptionally engineered systems</h2>
            </div>
            <div className={classes.tx}>
              <p>
                We are a team of engineers and designers, and we hold the
                products we craft to the highest standard. We believe that
                exceptionally engineered systems — not marble office buildings
                on Wall St — are the cornerstones of establishing trust.
              </p>
            </div>
            <div className={classes.hd}>
              <h2>Simplicity</h2>
            </div>
            <div className={classes.tx}>
              <p>
                We are a team of engineers and designers, and we hold the
                products we craft to the highest standard. We believe that
                exceptionally engineered systems — not marble office buildings
                on Wall St — are the cornerstones of establishing trust.
              </p>
            </div>
            <div className={classes.hd}>
              <h2>Individual participation in equity markets</h2>
            </div>
            <div className={classes.tx}>
              <p>
                We are a team of engineers and designers, and we hold the
                products we craft to the highest standard. We believe that
                exceptionally engineered systems — not marble office buildings
                on Wall St — are the cornerstones of establishing trust.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Grid container style={{ maxWidth: "88%", margin: "auto" }}>
        <Grid item xs={12}>
          <img
            style={{ width: "100%" }}
            src="https://cdn.robinhood.com/assets/robinhood/next_brand/_next/static/images/collage__b0b4060408d78aa3a49fa62e1750fc5f.jpg"
          />
        </Grid>
      </Grid>
      <div className="mainWarper">
        <Grid conatiner>
          <Grid item xs={12}>
            <div className={classes.perkHd}>
              <h1>Company Perks</h1>
            </div>
          </Grid>
        </Grid>
        <Grid container justify="center">
          {perkData.map((perk) => (
            <Grid
              container
              direction="column"
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
            >
              <img
                src={perk.img}
                style={{ width: "120px", display: "block", margin: "auto" }}
              />
              <div>
                <p
                  style={{
                    maxWidth: "80%",
                    margin: "2rem auto",
                    textAlign: "center",
                  }}
                >
                  {perk.text}
                </p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.investor}>
        <div className="mainWarper">
          <Grid conatiner>
            <Grid item xs={12}>
              <div className={classes.perkHd}>
                <h1>Our Investors</h1>
              </div>
              <div style={{ marginBottom: "3rem" }}>
                <h4>
                  We're backed by some of the world's most notable investors.
                </h4>
              </div>
            </Grid>
          </Grid>

          <Grid container justify="center" alignItems="center">
            {investor.map((inv) => (
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <br />
                <img
                  src={inv}
                  style={{ width: "80px", display: "block", margin: "auto" }}
                />
                <br />
                <br />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default About;
