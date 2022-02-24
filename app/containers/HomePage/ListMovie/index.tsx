import { Box, Button, Card } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "remix";
import { MovieItem, PropMovieItem } from "~/api/movie";

const useStyles = makeStyles((theme) => ({
  titleType: {
    color: "#00acc1",
  },
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
export default function ListMovie({
  title = "",
  movies = [],
  // homeSectionId = 0,
  newTitle = "",
}: PropMovieItem) {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {!newTitle && (
          <Box mt={4} mb={2}>
            <Typography variant="h5" className={classes.titleType}>
              {title?.includes("Loklok")
                ? "Phim tuyển chọn của REMIX"
                : title?.includes("kinh")
                ? "Phim kinh dị"
                : title}
            </Typography>
          </Box>
        )}
      </Grid>
      {movies &&
        movies?.map((item: MovieItem, index: number) => (
          <Grid item xs={2} key={(() => `${index}`)()}>
            <Link to={`/movie/detail/${item.id}?cate=${item.category}`}>
              <Card className={classes.cardItem}>
                <CardMedia
                  className={classes.media}
                  image={item.imageUrl}
                  title={title}
                />
                <Typography variant="body2" className={classes.hd}>
                  HD
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.textAbsolute}
                >
                  {item.title}
                </Typography>
              </Card>
            </Link>
          </Grid>
        ))}
    </Grid>
  );
}
