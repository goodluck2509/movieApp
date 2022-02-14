import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";
import { Button, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "#13151a",
    margin: 0,
    padding: 0,
    color: "#a1a1a1",
  },
  footer: {
    margin: "auto",
    maxWidth: "1280px",
    display: "flex",
    color: "#a1a1a1",
    alignItems: "center",
  },
  fullName: {
    color: "white",
  },
  name: {
    color: "yellow",
  },
  sectionFooter: {
    backgroundColor: "#303134",
    borderRadius: "5px",
    marginBottom: "5px",
    width: "90%",
  },
  link: {
    textDecoration: "none",
  },
  reserved: {
    backgroundColor: "#0d0e11",
    textAlign: "center",
  },
});

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.footer}>
        <Grid item xs={6}>
          <Box my={5}>
            <Typography variant="h5" paragraph className={classes.fullName}>
              <b>
                bom<span className={classes.name}>vang</span>
              </b>
            </Typography>
            <Typography variant="body1" paragraph>
              BomVangTV, tại đây bạn có thể xem những bộ phim online chất lượng
              cao miễn phí mà không gây phiền nhiễu về quảng cáo, chỉ cần bạn
              đến và tận hưởng xem phim online.
            </Typography>
            <Typography variant="body2" paragraph>
              Disclaimer: copyrights and trademarks for the movies and tv
              series, and other promotional materials are held by their
              respective owners and their use is allowed under the fair use
              clause of the Copyright Law. All Series Videos are hosted on
              sharing website, and provided by 3rd parties not affiliated with
              this site or it's server.
            </Typography>
            <Typography color="primary">xem phim, xem phim lẻ</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box my={5}>
            <List>
              <ListItem>
                {[1, 2, 3, 4].map(() => (
                  <List>
                    <ListItem className={classes.sectionFooter}>
                      <Link className={classes.link} color="initial">
                        PhimNhanh
                      </Link>
                    </ListItem>
                    <ListItem className={classes.sectionFooter}>
                      <Link className={classes.link} color="initial">
                        PhimNhanhABC
                      </Link>
                    </ListItem>
                    <ListItem className={classes.sectionFooter}>
                      <Link className={classes.link} color="initial">
                        PhimNhanh
                      </Link>
                    </ListItem>
                    <ListItem className={classes.sectionFooter}>
                      <Link className={classes.link} color="initial">
                        PhimNhanhABC
                      </Link>
                    </ListItem>
                  </List>
                ))}
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.reserved}>
        <Box my={2}>
          <Typography color="initial" variant="body2">
            Copyright ©2022 BomVangTV. All Rights Reserved
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
