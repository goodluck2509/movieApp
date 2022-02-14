import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import Footer from "~/common/Footer";
import Header from "~/common/Header";

const useStyles = makeStyles({
  root: {
    marginTop: "64px",
  },
  sectionPath: {
    background: "#353535",
    color: "#fff",
    fontSize: 20,
    padding: "12px 3%",
  },
  sectionDetail: {
    height: 600,
  },
  mainDetail: {
    // width: "100%",
    height: "72%",
    margin: "0 auto",
    display: "flex",
    padding: "4% 5%",
  },
  imageDetail: {
    width: "30%",
    height: "100%",
  },
  right: {
    width: "70%",
    background: "black",
    opacity: "80%",
    color: "#fff",
    padding: 30,
  },
  descriptionMovie: {
    margin: "30px 0 60px",
    lineHeight: "30px",
    wordSpacing: "2px",
  },
  sectionRating: {
    padding: 0,
    margin: "0 0 20px",
  },
  ratingTitlel: {
    marginBottom: 20,
    fontSize: 20,
  },
  releaseDate: {
    fontSize: 14,
    fontStyle: "italic",
  },
  movieInfor: {
    display: "flex",
    padding: "30px 5%",
    backgroundColor: "#353535",
    color: "#fff",
    fontSize: 22,
  },
  iconInfor: {
    marginRight: "16px",
    fontSize: 35,
  },
  sessionActors: {
    padding: "5%",
  },
  imageActor: {
    height: "100%",
  },
  actor: {
    display: "flex",
    height: 250,
  },
  inforActor: {
    color: "#fff",
    padding: "10px 20px",
    background: "#353535",
  },
  nameActor: {
    fontSize: 22,
    marginBottom: 12,
  },
});
export default function PageDetail() {
  const classes = useStyles();
  const getMovie = {
    adult: false,
    backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    belongs_to_collection: {
      id: 531241,
      name: "Spider-Man (Avengers) Collection",
      poster_path: "/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg",
      backdrop_path: "/AvnqpRwlEaYNVL6wzC4RN94EdSd.jpg",
    },
    budget: 200000000,
    genres: {
      homepage: "https://www.spidermannowayhome.movie",
      id: 634649,
      imdb_id: "tt10872600",
      original_language: "en",
      original_title: "Spider-Man: No Way Home",
      overview:
        "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      popularity: 11147.672,
      poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    },
    homepage: "https://www.spidermannowayhome.movie",

    id: 634649,
    imdb_id: "tt10872600",
    original_language: "en",
    original_title: "Spider-Man: No Way Home",

    overview:
      "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    popularity: 11147.672,
    poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    production_companies: [
      {
        id: 420,
        logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
        name: "Marvel Studios",
        origin_country: "US",
      },
      {
        id: 84041,
        logo_path: "/nw4kyc29QRpNtFbdsBHkRSFavvt.png",
        name: "Pascal Pictures",
        origin_country: "US",
      },
      {
        id: 5,
        logo_path: "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
        name: "Columbia Pictures",
        origin_country: "US",
      },
    ],
    production_countries: [
      { iso_3166_1: "US", name: "United States of America" },
    ],
    release_date: "2021-12-15",
    revenue: 1777598802,
    runtime: 148,
    spoken_languages: [
      { english_name: "English", iso_639_1: "en", name: "English" },
      { english_name: "Tagalog", iso_639_1: "tl", name: "" },
    ],
    status: "Released",
    tagline: "The Multiverse unleashed.",
    title: "Spider-Man: No Way Home",
    video: false,
    vote_average: 8.4,
    vote_count: 7704,
  };
  const actors = [
    {
      adult: false,
      cast_id: 1,
      character: "Peter Parker / Spider-Man",
      credit_id: "5d8e28d38289a0000fcc32f9",
      gender: 2,
      id: 1136406,
      known_for_department: "Acting",
      name: "Tom Holland",
      order: 0,
      original_name: "Tom Holland",
      popularity: 138.146,
      profile_path: "/2qhIDp44cAqP2clOgt2afQI07X8.jpg",
    },
    {
      adult: false,
      cast_id: 54,
      character: "Michelle 'MJ' Jones",
      credit_id: "5fd968c09408ec003cdd0557",
      gender: 1,
      id: 505710,
      known_for_department: "Acting",
      name: "Zendaya",
      order: 1,
      original_name: "Zendaya",
      popularity: 72.303,
      profile_path: "/jHWlWOasiqKS8JI40g9GDH5X6AL.jpg",
    },
    {
      adult: false,
      cast_id: 33,
      character: "Stephen Strange / Doctor Strange",
      credit_id: "5f7f51e42f3b170035f3a821",
      gender: 2,
      id: 71580,
      known_for_department: "Acting",
      name: "Benedict Cumberbatch",
      order: 2,
      original_name: "Benedict Cumberbatch",
      popularity: 47.212,
      profile_path: "/fBEucxECxGLKVHBznO0qHtCGiMO.jpg",
    },
  ];
  return (
    <>
      <Header />
      <Grid className={classes.root}>
        {/* <Box className={classes.sectionPath}>{`Home / ${getMovie.title}`}</Box> */}
        <CardMedia
          className={classes.sectionDetail}
          image={`http://image.tmdb.org/t/p/w1280/${getMovie.backdrop_path}`}
        >
          <Box className={classes.mainDetail}>
            <CardMedia
              className={classes.imageDetail}
              image={`http://image.tmdb.org/t/p/w500/${getMovie.poster_path}`}
            />
            <Box className={classes.right}>
              <Typography variant="h3">{getMovie.title}</Typography>
              <Typography className={classes.descriptionMovie}>
                {getMovie.overview}
              </Typography>
              <Box
                component="fieldset"
                borderColor="transparent"
                className={classes.sectionRating}
              >
                <Typography component="legend" className={classes.ratingTitlel}>
                  Rating:
                </Typography>

                <Rating
                  // className={classes.start}
                  name="customized-10"
                  // defaultValue={2.5}
                  value={getMovie.vote_average ? getMovie.vote_average : 2.5}
                  max={5}
                  precision={0.5}
                />
              </Box>
              <Typography className={classes.releaseDate}>
                {`Ngày phát hành: ${getMovie.release_date}`}
              </Typography>
            </Box>
          </Box>
        </CardMedia>
        <Box className={classes.movieInfor}>
          <Box flex="1" display="flex" alignItems="center">
            <AccessTimeIcon className={classes.iconInfor} />
            <Typography>{`Running time: ${getMovie.runtime}m`}</Typography>
          </Box>
          <Box flex="1" display="flex" alignItems="center">
            <LocalAtmIcon className={classes.iconInfor} />
            <Typography>{`Budget: $${getMovie.budget}`}</Typography>
          </Box>
          <Box flex="1" display="flex" alignItems="center">
            <MonetizationOnIcon className={classes.iconInfor} />
            <Typography>{`Revenue: $${getMovie.revenue}`}</Typography>
          </Box>
        </Box>
        <Grid container spacing={5} className={classes.sessionActors}>
          {actors &&
            actors.map((value, index) => (
              <Grid
                key={(() => `${index}`)()}
                item
                xs={3}
                className={classes.actor}
              >
                <Grid item xs={5}>
                  <CardMedia
                    className={classes.imageActor}
                    image={`http://image.tmdb.org/t/p/w154/${value.profile_path}`}
                  />
                </Grid>
                <Grid item xs={7} className={classes.inforActor}>
                  <Typography className={classes.nameActor}>
                    {value.name}
                  </Typography>
                  <Typography
                  // className={classes.characterActor}
                  >
                    {value.character}
                  </Typography>
                </Grid>
              </Grid>
            ))}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
