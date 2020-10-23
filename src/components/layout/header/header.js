import React from "react";
import Link from "next/link";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Hidden } from "@material-ui/core";

import Drawer from "./Drawer/Drawer";

import classes from "./header.module.css";

export default function Header() {
  return (
    <div>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Hidden only={["xs", "sm"]}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link href="/">
                <a>
                  <Typography
                    style={{ fontWeight: "600", fontSize: "1.5rem" }}
                    variant="h5"
                  >
                    Robinhood
                  </Typography>
                </a>
              </Link>
              <div className={classes.navItems}>
                <div className={classes.navItem}>
                  <Typography
                    style={{ fontWeight: "500", fontSize: "1.1rem" }}
                    variant="subtitle1"
                  >
                    Products
                  </Typography>
                  <Checkbox
                    icon={<KeyboardArrowDownIcon />}
                    checkedIcon={<KeyboardArrowUpIcon />}
                  />
                </div>
                <div className={classes.navItem}>
                  <Typography
                    style={{ fontWeight: "500", fontSize: "1.1rem" }}
                    variant="subtitle1"
                  >
                    Learn
                  </Typography>
                  <Checkbox
                    icon={<KeyboardArrowDownIcon />}
                    checkedIcon={<KeyboardArrowUpIcon />}
                  />
                </div>
                <div className={classes.navItem}>
                  <Link href="/support">
                    <a>
                      <Typography
                        style={{ fontWeight: "500", fontSize: "1.1rem" }}
                        variant="subtitle1"
                      >
                        Support
                      </Typography>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={classes.register}>
              <Link href="/support">
                <a>
                  <Typography
                    style={{ fontWeight: "bold", fontSize: "1.1rem" }}
                    variant="subtitle1"
                  >
                    Login
                  </Typography>
                </a>
              </Link>
              <div className={classes.btn}>
                <button>SignUp</button>
              </div>
            </div>
          </Hidden>

          <Hidden only={["md", "lg", "xl"]}>
            <Link href="/">
              <a>
                <Typography
                  style={{ fontWeight: "600", fontSize: "1.5rem" }}
                  variant="h5"
                >
                  Robinhood
                </Typography>
              </a>
            </Link>
            <Drawer />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}
