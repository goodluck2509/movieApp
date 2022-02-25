import React from "react";
import PropTypes from "prop-types";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Link } from "remix";
import { Card, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardItem: {
    flex: 1,
    background: "black",
    borderRadius: "5px",
    //
    overflow: "unset",
    wordBreak: "break-word",
    boxShadow: "none",
    cursor: "pointer",
    position: "relative",
    transition: "all 0.2s ease-in-out",
    "-o-transition": "all 0.2s ease-in-out",
    "-moz-transition": "all 0.2s ease-in-out",
    "-webkit-transition": "all 0.2s ease-in-out",
    "&:hover": {
      boxShadow: "0px 3px 20px 0px rgba(44, 101, 144, 0.3)",
      "-webkit-transform": "translateY(-4px)",
      "-moz-transform": "translateY(-4px)",
      "-o-transform": "translateY(-4px)",
      "-ms-transform": "translateY(-4px)",
      transform: "translateY(-4px)",
    },
  },
  hd: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
    color: "white",
    background: "red",
    padding: "3px",
    boxShadow: "6px 6px 0 0 #000000fa",
    borderRadius: "2px",
  },
  textAbsolute: {
    justifyContent: "center",
    color: "yellow",
    position: "absolute",
    bottom: "12px",
    fontSize: 13,
    background: "#000000cf",
    width: "100%",
    height: 75,
    display: "flex",
    opacity: "85%",
    textAlign: "center",
    alignItems: "center",
  },
  media: {
    height: 300,
  },
}));

export default function index({ to, imageUrl, title }: any) {
  const classes = useStyles();
  return (
    <>
      <Link to={to}>
        <Card className={classes.cardItem}>
          <CardMedia className={classes.media} image={imageUrl} title={title} />
          <Typography variant="body2" className={classes.hd}>
            HD
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.textAbsolute}
          >
            {title}
          </Typography>
        </Card>
      </Link>
    </>
  );
}
Cardhover.propTypes = {
  to: PropTypes.any,
  imageUrl: PropTypes.any,
  title: PropTypes.any,
};
Cardhover.defaultProps = {};
