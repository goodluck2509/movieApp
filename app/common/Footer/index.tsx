import { Grid, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import LinkHref from "@material-ui/core/Link";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";
import { Link } from "remix";
const useStyles = makeStyles((theme: any) => ({
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
  },
  rootBtn: {
    background: theme.background,
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: theme.boxShadow,
    color: "white",
    height: 48,
    padding: "0 30px",
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
    color: "#a1a1a1",
  },
  reserved: {
    backgroundColor: "#0d0e11",
    textAlign: "center",
  },
}));

function DeepChild() {
  const classes = useStyles();

  return (
    <button type="button" className={classes.rootBtn}>
      <b>
        bom<span className={classes.name}>vang</span>
      </b>
    </button>
  );
}
export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.footer}>
        <Grid item xs={6}>
          <Box my={5} mx={5}>
            <ThemeProvider
              theme={{
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
              }}
            >
              <DeepChild />
              <br />
              <br />
            </ThemeProvider>
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
            <Box display="flex">
              <Box mr={1}>
                <Link to="/" className={classes.link}>
                  <Typography color="primary">xem phim</Typography>
                </Link>
              </Box>
              <Link to="/" className={classes.link}>
                <Typography color="primary">xem phim lẻ</Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} justifyContent="center">
          <Box my={5} mx={5}>
            <Typography variant="h5" paragraph>
              Contact
            </Typography>
            <Typography variant="body1">
              Address: 02 Lê Quý Đôn TP Huế
            </Typography>
            <Typography variant="body1">SDT: 123456789</Typography>
            <Typography variant="body1">Emai: abc@gmail.com</Typography>
            <Typography variant="body1">
              Đóng góp ý kiến <Link to="/">Click</Link>
            </Typography>
            <Box display="flex" mt={11}>
              <Box mr={1}>
                <LinkHref
                  href="https://www.facebook.com/"
                  target="blank"
                  className={classes.link}
                >
                  <FacebookIcon />
                </LinkHref>
              </Box>
              <Box mr={1}>
                <LinkHref
                  href="https://www.instagram.com/"
                  target="blank"
                  className={classes.link}
                >
                  <InstagramIcon />
                </LinkHref>
              </Box>
              <Box mr={1}>
                <LinkHref
                  href="https://twitter.com/"
                  target="blank"
                  className={classes.link}
                >
                  <TwitterIcon />
                </LinkHref>
              </Box>
            </Box>
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
