import { Button, Card, Divider, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import LinkHre from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PublicIcon from "@material-ui/icons/Public";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import { Link, useLoaderData } from "remix";
import { MovieItemDetail } from "~/api/movie";
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
  mainDetail: {
    padding: "5%",
  },
  imageDetail: {
    width: "100%",
    height: "100%",
  },
  detailInfo: {
    background: "black",
    opacity: "80%",
    color: "#fff",
    padding: "50px",
  },
  descriptionMovie: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 5,
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
  likeList: {
    maxWidth: "1280px",
    margin: "auto",
    marginBottom: "50px",
  },
  // car
  cardItem: {
    flex: 1,
    background: "black",
    borderRadius: "5px",
    padding: "5px",
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
    top: "16px",
    right: "16px",
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
    fontSize: 9,
    background: "#000000cf",
    width: "90%",
    height: 50,
    display: "flex",
    opacity: "85%",
    textAlign: "center",
    alignItems: "center",
  },
  media: {
    height: 200,
  },
  video: {
    width: "100%",
    height: "500px",
    maxWidth: "1280px",
    backgroundColor: "#424040",
    margin: "auto",
    position: "relative",
  },
  btnPlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
});
export default function index() {
  const classes = useStyles();

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
  const filmData = useLoaderData();
  const film = filmData?.films;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid className={classes.root}>
      {/* <Box className={classes.sectionPath}>{`Home / ${getMovie.title}`}</Box> */}
      <CardMedia image={film?.coverHorizontalUrl}>
        <Grid container className={classes.mainDetail}>
          <Grid item xs={4}>
            <CardMedia
              className={classes.imageDetail}
              image={film?.coverVerticalUrl}
            />
          </Grid>
          <Grid item xs={8}>
            <Box className={classes.detailInfo}>
              <Typography variant="h4" paragraph>
                {film?.name}
              </Typography>
              <Typography variant="body2" className={classes.descriptionMovie}>
                {film?.introduction}
              </Typography>
              <Box display="flex" alignItems="center" my={2}>
                <Typography variant="h6">Rating:&nbsp;&nbsp;</Typography>
                <Rating
                  name="customized-10"
                  value={film?.score ? film?.score : 2.5}
                  max={10}
                  precision={0.5}
                />
              </Box>
              <Typography variant="body1">
                Năm phát hành: <i>20/2/2022</i>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardMedia>
      <Box className={classes.movieInfor}>
        <Box flex="1" display="flex" alignItems="center">
          <PublicIcon className={classes.iconInfor} />
          <Typography>Quốc gia: {film?.areaNameList[0]}</Typography>
        </Box>
        <Box flex="1" display="flex" alignItems="center">
          <ImportContactsIcon className={classes.iconInfor} />
          <Typography>Số tập: {film?.episodeVo?.length}</Typography>
        </Box>
        {film?.episodeVo?.length > 1 ? (
          <Box flex="1" display="flex" alignItems="center">
            <AccessTimeIcon className={classes.iconInfor} />
            <Typography>30 phút/tập</Typography>
          </Box>
        ) : (
          <Box flex="1" display="flex" alignItems="center">
            <AccessTimeIcon className={classes.iconInfor} />
            <Typography>180 phút/tập</Typography>
          </Box>
        )}
        <Box flex="1" display="flex" alignItems="center">
          <VisibilityIcon className={classes.iconInfor} />
          <Typography>Lượt xem: 17802</Typography>
        </Box>
      </Box>
      <Grid container spacing={5} className={classes.sessionActors}>
        <Grid
          item
          xs={12}
          className={classes.video}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            className={classes.btnPlay}
            onClick={handleClickOpen}
          >
            <PlayArrowIcon />
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              <b>Thông báo</b>
            </DialogTitle>
            <DialogContent dividers>
              <DialogContentText id="alert-dialog-description">
                <b>
                  Trang web hiện chưa thể xem. Bạn có muốn chuyển sang netflix
                  không?
                </b>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="outlined" onClick={handleClose} color="primary">
                Bỏ
              </Button>
              <Button
                variant="outlined"
                onClick={handleClose}
                color="primary"
                autoFocus
              >
                <LinkHre
                  href="https://www.netflix.com/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Đồng ý
                </LinkHre>
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="primary" paragraph>
            Các diễn viên tham gia trong phim
          </Typography>
        </Grid>
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
      <Divider />
      <Grid container spacing={1} className={classes.likeList}>
        <Grid item xs={12}>
          <Typography variant="h6" color="primary" paragraph>
            Phim tương tự
          </Typography>
        </Grid>
        {film?.likeList.map((item: MovieItemDetail, index: number) => (
          <Grid item xs={1} key={(() => `${index}`)()}>
            <Link to={`/movie/detail/${item.id}?cate=${item.category}`}>
              <Card className={classes.cardItem}>
                <CardMedia
                  className={classes.media}
                  image={item.coverHorizontalUrl}
                  title={item.name}
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
                  {item.name}
                </Typography>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
