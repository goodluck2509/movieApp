// import React from "react";
// import PageDetail from "~/component/PageDetail";

// export default function DetailPage() {
//   return <PageDetail />;
// }
import { Card, Divider, Typography } from "@material-ui/core";
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
import PublicIcon from "@material-ui/icons/Public";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {
  ActionFunction,
  Link,
  LoaderFunction,
  MetaFunction,
  redirect,
  useCatch,
  useLoaderData,
} from "remix";
import invariant from "tiny-invariant";
// import { addComment } from "~/api/comments";
import { getFilmDetail, MovieItemDetail } from "~/api/movie";
// import CommentsList from "~/components/CommentList";

export const meta: MetaFunction = ({ data }) => {
  return {
    title: data.aliasName,
    description: data.name,
    image: data.coverHorizontalUrl,
  };
};

export const action: ActionFunction = async ({ request, params }) => {
  invariant(params.name, "expected params.name");
  const url = new URL(request.url);
  const cateId = url.searchParams.get("cate");
  // const body = await request.formData();

  //   const comment: any = {
  //     name: body.get("name") as string,
  //     comment: body.get("comment") as string,
  //     filmId: params.name,
  //     cateId,
  //   };
  //   console.log("comment", comment);

  //   const errors = { name: "", comment: "" };

  //   if (!comment.name) {
  //     errors.name = "Vui lòng nhập tên của bạn";
  //   }

  //   if (!comment.comment) {
  //     errors.comment = "Vui lòng nhập bình luận";
  //   }

  //   if (errors.name || errors.comment) {
  //     const values = Object.fromEntries(body);
  //     return { errors, values };
  //   }

  //   // await addComment(comment);

  return redirect(`/movie/detail/${params.name}?cate=${cateId}`);
};

export const loader: LoaderFunction = async ({ params, request }) => {
  const url = new URL(request.url);
  const cate = url.searchParams.get("cate");
  invariant(params?.name, "expected params.name");
  const name = params?.name;

  const dataDetail = await getFilmDetail(name, cate);

  return dataDetail;
};

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
  console.log("🚀 ~ index ~ film", film);

  return (
    <>
      <Header />
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
                <Typography
                  variant="body2"
                  className={classes.descriptionMovie}
                >
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
                    // title="Paella dish"
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
      <Footer />
    </>
  );
}

///

export function ErrorBoundary({ error }: any) {
  return (
    <div className="body">
      <div className="">Xin thông báo</div>
      <div className="">
        <div className="">Uh oh... Xin lỗi, đã có lỗi xảy ra!</div>
        <p>{error?.message}</p>
      </div>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return (
      <div className="body">
        <div className="">Xin thông báo</div>
        <div className="">
          <div className="">Không tìm thấy trang này!</div>
          <p>
            {caught.status} {caught.statusText}
          </p>
        </div>
      </div>
    );
  }

  throw new Error("Unkown error");
}
