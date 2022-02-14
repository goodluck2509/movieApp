import { Card } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "remix";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import _get from "lodash/get";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useLoaderData } from "remix";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Black Widow",
    type: "Thể Loại: Phim Hành Động, Phim Viễn Tưỡng",
    imgPath:
      "https://i3.wp.com/image.bongngocdn.com/upload/slide-goa-phu-den-2021.jpg",
    description:
      "Góa Phụ Đen - Black Widow (2021) lấy bối cảnh ngay sau sự kiện Captain America: Civil War, lần này nữ điệp viên phải đối diện với những câu hỏi...",
  },
  {
    label: "Liên Minh Công Lý: Phiên bản của Zack Snyder",
    type: "Thể Loại: Phim Hành Động, Phim Phiêu Lưu, Phim Viễn Tưỡng",
    imgPath:
      "https://i3.wp.com/image.bongngocdn.com/upload/slide-lien-minh-cong-ly-phien-ban-cua-zack-snyder-2021.jpg",
    description:
      "Justice League bản mới có thời lượng 4 tiếng, dài gấp đôi so với bản công chiếu gần 4 năm trước. Tại sự kiện DC FanDome, Snyder cho bết:...",
  },
  {
    label: "Mortal Kombat: Cuộc Chiến Sinh Tử",
    type: "Thể Loại: Phim Hành Động, Phim Phiêu Lưu, Phim Viễn Tưỡng",
    imgPath:
      "https://i3.wp.com/image.bongngocdn.com/upload/slide-mortal-kombat-cuoc-chien-sinh-tu-2021.jpg",
    description:
      "Mortal Kombat: Cuộc Chiến Sinh Tử xoay quanh võ sĩ võ thuật tổng hợp Cole Young (Lewis Tan), người mang trên mình một vết chàm rồng đen bí...",
  },
  {
    label: "Godzilla Đại Chiến Kong",
    type: "Thể Loại: Phim Hành Động, Phim Viễn Tưỡng",
    imgPath:
      "https://i3.wp.com/image.bongngocdn.com/upload/slide-godzilla-dai-chien-kong-2021.jpg",
    description:
      "Sau các sự kiện diễn ra ở “Godzilla: King of the Monsters”, trong thời đại mà các Titans đòi lại quyền làm chủ hành tinh, cuộc...",
  },
  {
    label: "Thám Hiểm Rừng Xanh",
    type: "Thể Loại: Phim Hành Động, Phim Viễn Tưỡng",
    imgPath:
      "https://i3.wp.com/image.bongngocdn.com/upload/slide-tham-hiem-rung-xanh-2021.jpg",
    description:
      "Thám Hiểm Rừng Xanh-  Jungle Cruise: Phim kể về một cặp đôi đi thám hiểm cùng nhau - Frank và Lily. Một người là thuyền trưởng...",
  },
];

const useStyles = makeStyles((theme) => ({
  rootHompage: {
    marginTop: "64px",
  },
  container: {
    minHeight: "100vh",
    color: "white",
    maxWidth: "1280px",
    margin: "auto",
  },
  // stepper
  root: {
    flexGrow: 1,
    position: "relative",
  },
  header: {
    position: "absolute",
    color: "white",
    bottom: "10%",
    left: "20%",
    maxWidth: "1240px",
    background: "unset",
    zIndex: 15,
  },
  mobilestep: {
    position: "absolute",
    bottom: 0,
    right: "50%",
    background: "unset",
    zIndex: 25,
  },
  styleShadow: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "25%",
    background:
      "linear-gradient(#1e212900, #1e212970, #1e2129d9,#1e2129, #1e2129)",
    zIndex: 10,
  },
  img: {
    height: 700,
    display: "block",
    overflow: "hidden",
    width: "100%",
  },
  //
  banner: {
    backgroundColor: "#2f3441",
  },
  iconRssFeed: {
    fontSize: "75px",
  },
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
  seeMore: {
    background: "#00acc1",
    marginTop: 20,
    textTransform: "none",
    color: "white",
  },
  searchInput: {
    width: "100%",
    background: "#fff",
    margin: "10px 0 40px",
    padding: 10,
    borderRadius: "30px",
  },
  iconSearch: {
    color: "black",
    fontSize: 40,
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleStepChange = (step: any) => {
    setActiveStep(step);
  };
  let getData = useLoaderData();
  const listDataMovie = _get(getData, "data.recommendItems");

  return (
    <Grid className={classes.rootHompage}>
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography variant="h5" paragraph>
            {tutorialSteps[activeStep].label}
          </Typography>
          <Typography variant="body1">
            {tutorialSteps[activeStep].type}
          </Typography>
          <Typography variant="body2">
            {tutorialSteps[activeStep].description}
          </Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton=""
          backButton=""
          className={classes.mobilestep}
        />
        <div className={classes.styleShadow}></div>
      </div>
      <Grid className={classes.container}>
        <Box
          display="flex"
          alignItems="center"
          className={classes.banner}
          my={3}
        >
          <RssFeedIcon className={classes.iconRssFeed} />
          <Box alignItems="center">
            <Typography variant="h5">
              <b>BomVang TV</b>
            </Typography>
            <Typography component="p">
              Nơi xem phim online miễn phí với hàng ngàn bộ phim hay được cập
              nhật liên tục.
            </Typography>
          </Box>
        </Box>
        <Typography variant="h5" paragraph className={classes.titleType}>
          Trọn bộ
        </Typography>
        <Box>
          {listDataMovie.map((item: any, index: any) => {
            const listMovie = item.recommendContentVOList;
            return (
              <Grid container spacing={2} key={(() => `${index}`)()}>
                {listMovie &&
                  listMovie.map((value: any, index2: any) => (
                    <Grid item xs={2} key={(() => `${index2}`)()}>
                      <Link
                        // to={`/${value.id}`}
                        to="/detailPage"
                      >
                        <Card className={classes.cardItem}>
                          <CardMedia
                            className={classes.media}
                            // image={`http://image.tmdb.org/t/p/w500/${value.poster_path}`}
                            image={value.imageUrl}
                            title="Paella dish"
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
                            {value.title}
                          </Typography>
                        </Card>
                      </Link>
                    </Grid>
                  ))}
              </Grid>
            );
          })}
          <Box textAlign="center" my={3}>
            <Button variant="contained" className={classes.seeMore}>
              Xem thêm
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
